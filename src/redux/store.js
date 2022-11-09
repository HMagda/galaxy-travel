import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

export const initialState = {
  subPages:  ['About Us', 'FAQ', 'Careers', 'Investors']
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;