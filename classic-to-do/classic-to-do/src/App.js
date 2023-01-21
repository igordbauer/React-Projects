import { Routes, Route, Navigate } from "react-router";
import MainNavbar from "./components/MainNavbar";
import Layout from "./components/Layout";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskPage from "./pages/TaskPage";
import MyCalendarPage from "./pages/MyCalendarPage";

function App() {
  // const weekDay = new Date().getDay()
  // const day = new Date().getDate()
  // const month = new Date().getMonth()
  // const months = Object.keys(monthsEnum)
  // const calendar = months.map(month => {
  //   const days = [...Array(monthsEnum[month].days).keys()].map(day => {
  //     const weekDay = new Date(`${month} ${day + 1}, ${new Date().getFullYear()}`).getDay()
  //     console.log(day)
  //     return {
  //       day: day + 1,
  //       weekDay: weekEnum[weekDay]
  //     }
  //   })
  //   return {
  //     name: monthsEnum[month].name,
  //     days: days
  //   }
  // })
  return (
    <>
      <MainNavbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/myCalendar" />} />
          <Route path="/myTasks" replace element={<TaskPage />} />
          <Route path="/createTask" replace element={<CreateTaskPage />} />
          <Route path="/myCalendar" replace element={<MyCalendarPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
