import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

// export async function getServerSideProps(context) {
//   // fetch data from api
// // used when you need to re render the page more frquently to get newer content (refresh!)
// const req = context.req;
// const res = context.res;
//   return {
//     props: {
//       meetups: MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://igordbauer:zt84c7nt@cluster0.hiqm2sp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  // fetch data from api.
  // this function is used to call data or whatever you want to pre render in the component file
  // than you dont need to useEffect data and refresh the content page only in the second renderization!
  return {
    props: {
      meetups: meetups.map((e) => ({
        title: e.title,
        address: e.address,
        image: e.image,
        id: e._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
