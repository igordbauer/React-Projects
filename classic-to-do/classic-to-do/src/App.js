import { Routes, Route, Navigate } from "react-router";
import MainNavbar from "./components/MainNavbar";
import Layout from "./components/Layout";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskPage from "./pages/TaskPage";


function App() {
  return (
    <>
      <MainNavbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to='/myTasks' />} />
          <Route path="/myTasks" replace element={<TaskPage />} />
          <Route path="/createTask" replace element={<CreateTaskPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
