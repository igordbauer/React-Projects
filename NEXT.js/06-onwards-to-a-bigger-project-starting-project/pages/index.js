import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const MEETUPS = [
  {
    id: '1',
    tilte: 'First meetup',
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Gaspar_van_Wittel_-_View_of_the_San_Marco_Basin.JPG",
    address: 'Veneza',
    description: 'This is the first meetup'
  },
  {
    id: '2',
    tilte: 'Second meetup',
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Gaspar_van_Wittel_-_View_of_the_San_Marco_Basin.JPG",
    address: 'Veneza',
    description: 'This is the Second meetup'
  },
  {
    id: '3',
    tilte: 'third meetup',
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Gaspar_van_Wittel_-_View_of_the_San_Marco_Basin.JPG",
    address: 'Veneza',
    description: 'This is the third meetup'
  }
]


const HomePage = () => {
  return (
    <MeetupList meetups={MEETUPS} />
  )
}
export default HomePage;