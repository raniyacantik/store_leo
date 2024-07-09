import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_FROM_CART } from '../actions/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case DECREMENT_FROM_CART:
      const itemToDecrement = state.cartItems.find(item => item.id === action.payload);
      if (itemToDecrement.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;