import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/uiSlice';
import Notification from './components/UI/Notification';

let isInitial = true

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      }))

      await fetch('https://react-api-integration-test-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Sended!',
        message: 'Sent card data successfully!',
      }))
    }
    if (isInitial) {
      isInitial = false
      return
    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }))
    })
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
