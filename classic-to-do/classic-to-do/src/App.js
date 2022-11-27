import Table from "./components/Table";
import MainNavbar from "./components/MainNavbar";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";


function App() {
  const notStarted = useSelector(state => state.taskReducer.notStarted)
  const inProgress = useSelector(state => state.taskReducer.inProgress)
  const finished = useSelector(state => state.taskReducer.finished)
  return (
    <>
      <MainNavbar />
      <Layout>
        <Table tasks={notStarted} />
        <Table tasks={inProgress} />
        <Table tasks={finished} />
      </Layout>
    </>
  );
}

export default App;
