import Layout from "./components/Layout";
import MainNavbar from "./components/MainNavbar";

export const color = {
  app: 'linear - gradient(0deg, rgba(182, 34, 195, 1) 0 %, rgba(15, 227, 249, 1) 50 %);'
}

function App() {
  return (
    <>
      <MainNavbar />
      <Layout>
        <h2>Let's get started!</h2>
      </Layout>
    </>
  );
}

export default App;
