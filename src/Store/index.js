// src/store/index.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
