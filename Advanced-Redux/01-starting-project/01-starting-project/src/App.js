import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cartActions'

let isInitial = true

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])


  return (
    <>
      <Notification
        status={notification?.status}
        title={notification?.title}
        message={notification?.message}
      />
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
