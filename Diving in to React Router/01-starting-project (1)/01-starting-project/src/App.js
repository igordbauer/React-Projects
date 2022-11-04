import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Product from './pages/Product'

function App() {
  return (
    <div>
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/product'>
        <Product />
      </Route>
    </div>
  );
}

export default App;
