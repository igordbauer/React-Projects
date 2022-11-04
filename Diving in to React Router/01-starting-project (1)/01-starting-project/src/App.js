import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Product from './pages/Product'
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/product-detail/:productId'>
          {/* The ':' turns the next value in a dynamic value! */}
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
