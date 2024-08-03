import React from 'react';
import CartItems from '../Components/CartItems/CartItems';


const Cart = () => {
  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <CartItems />
    </div>
  );
}

export default Cart;
