import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
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
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
};
export default NewMeetupPage;
