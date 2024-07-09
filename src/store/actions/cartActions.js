export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT_FROM_CART = 'DECREMENT_FROM_CART';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const decrementFromCart = (productId) => {
  return {
    type: DECREMENT_FROM_CART,
    payload: productId,
  };
};