import MeetupDetail from "../../components/meetups/MeetupDetail";


const MeetupDetails = () => {
  return (
    <MeetupDetail
      img="https://upload.wikimedia.org/wikipedia/commons/a/a6/Gaspar_van_Wittel_-_View_of_the_San_Marco_Basin.JPG"
      title='First meetup'
      address='Some address'
      description='some description'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{
      params: {
        meetupId: 'm1'
      }
    }, {
      params: {
        meetupId: 'm2'
      }
    }]
  }
}

export async function getStaticProps(context) {
  // fetch data for a singl meetup
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        id: meetupId,
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Gaspar_van_Wittel_-_View_of_the_San_Marco_Basin.JPG",
        title: 'First meetup',
        address: 'Some address',
        description: 'some description',
      }
    }
  }
}

export default MeetupDetails;