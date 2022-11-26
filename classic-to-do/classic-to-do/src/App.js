import Table from "./components/Table";
import MainNavbar from "./components/MainNavbar";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <MainNavbar />
      <Layout>
        <Table />
        <Table />
        <Table />
      </Layout>
    </>
  );
}

export default App;
