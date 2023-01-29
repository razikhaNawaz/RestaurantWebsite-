import {useContext} from'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartcntx=useContext(CartContext);
  const totalAmount=`$${cartcntx.totalAmount.toFixed(2)}`;

 
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntx.items.map((item) => (
        <CartItem key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
       
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;