import { uiActions } from "./uiSlice"
import { cartActions } from "./cartSlice"


export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch('https://react-api-integration-test-default-rtdb.firebaseio.com/cart.json')
      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }
      const data = await response.json();
      return data
    }
    try {
      const data = await fetchData()
      dispatch(cartActions.replaceCart(data))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetchin cart data failed!',
      }))
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('https://react-api-integration-test-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error('Sending cart data failed')
      }
    }
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data',
    }))
    try {
      sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Sended!',
        message: 'Sent card data successfully!',
      }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }))
    }
  }
}