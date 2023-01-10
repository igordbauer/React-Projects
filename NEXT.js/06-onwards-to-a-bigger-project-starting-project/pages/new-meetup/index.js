import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
const NewMeetupPage = () => {
  const router = useRouter();

  const AddMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
};
export default NewMeetupPage;
