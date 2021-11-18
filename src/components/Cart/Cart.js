import React from 'react';

const Cart = (props) => {
  const {cart} = props;

  const total = cart.reduce((previous, product) => previous + product.price, 0);
  // let total = 0;
  // for (const product of cart) {
  //   total = total + product.price;
  // }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) / 10;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h2>Order Summary</h2>
      <h4>Items Ordered: {props.cart.length}</h4>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;