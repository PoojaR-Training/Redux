import {ADD_CART, REMOVE_CART, DISPLAY_CART} from './constant';
const intialState = [];

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.data];
    case REMOVE_CART:
       const itemToRemove = state.find((item) => item.name === action.data);
       if (!itemToRemove) {
         return state; 
       }
       if (state.length === 1) {
         return state.filter((item) => item.name !== action.data);
       } else {
         const newState = [...state];
         const indexToRemove = newState.indexOf(itemToRemove);
         newState.splice(indexToRemove, 1);
         return newState;
       }

    default:
      return state;
  }
};
