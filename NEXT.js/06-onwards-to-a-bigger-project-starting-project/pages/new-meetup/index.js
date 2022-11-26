import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {

  const AddMeetupHandler = (enteredMeetupData) => {

  }

  return (
    <NewMeetupForm onAddMeetup={AddMeetupHandler} />
  )
}
export default NewMeetupPage;
