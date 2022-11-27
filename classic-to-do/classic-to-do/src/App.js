import MainNavbar from "./components/MainNavbar";
import Layout from "./components/Layout";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <>
      <MainNavbar />
      <Layout>
        <TaskPage />
      </Layout>
    </>
  );
}

export default App;
