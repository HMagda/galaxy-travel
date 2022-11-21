import {createStore} from 'redux';
const reducer = (state, action) => {
  return state;
};

export const initialState = {
  subPages: ['About Us', 'FAQ', 'Careers', 'Investors'],
  users: [
    {
      name: {first: 'Jane', last: 'Doe'},
      location: {country: 'USA'},
      login: {uuid: 11111},
      dob: {age: 18},
      picture: {large: 'https://randomuser.me/api/portraits/men/34.jpg'},
    },
    {
      name: {first: 'Jane', last: 'Doe'},
      location: {country: 'USA'},
      login: {uuid: 222222},
      dob: {age: 18},
      picture: {large: 'https://randomuser.me/api/portraits/men/34.jpg'},
    },
    {
      name: {first: 'Jane', last: 'Doe'},
      location: {country: 'USA'},
      login: {uuid: 333333},
      dob: {age: 18},
      picture: {large: 'https://randomuser.me/api/portraits/men/34.jpg'},
    }
  ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
