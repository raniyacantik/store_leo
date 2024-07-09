import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decrementFromCart, addToCart } from '../store/actions/cartActions';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecrementFromCart = (productId) => {
    dispatch(decrementFromCart(productId));
  };

  const handleIncrementFromCart = (product) => {
    dispatch(addToCart(product));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart container mt-4">
      <h2 className="mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-thumbnail me-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <div className="flex-grow-1">
                  <h5>{item.title}</h5>
                  <p className="text-muted mb-1">Quantity: {item.quantity}</p>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-primary me-2" onClick={() => handleDecrementFromCart(item.id)}>
                      -
                    </button>
                    <button className="btn btn-outline-primary me-2" onClick={() => handleIncrementFromCart(item)}>
                      +
                    </button>
                    <button className="btn btn-outline-danger" onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="ml-auto">${item.price * item.quantity}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 d-flex justify-content-end">
            <h5 className="me-3">Subtotal:</h5>
            <h5>${calculateSubtotal()}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;