import React,{ useState} from 'react'
import Cart from './component/Cart/Cart';
import Header from "./component/Layout/Header";
import Meals from './component/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
  const [cart,setCart]=useState(false)

  const cartOpenHandler =() => {
    setCart(true)
  }
  const cartCloseHandler =() => {
    setCart(false)
  }
  return (
    <CartProvider>
      {cart &&<Cart onClose={cartCloseHandler}/>}
    <Header onShow={cartOpenHandler}/>
    <main>
    <Meals/>
    </main>
    </CartProvider>
  );
}

export default App;
