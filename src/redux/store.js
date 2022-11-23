import {createStore} from 'redux';

const reducer = (state, action) => {
  return state;
};

export const initialState = {
  subPages: ['About Us', 'FAQ', 'Careers', 'Investors'],
  optionsIncluded: {
    basicOptions: {
      title: 'Basic',
      price: '$1 bilion',
      time: '24 hours in space',
      options: [
        'a room with a view of the Earth',
        'unlimited entry to the viewpoint',
        'indulgent breakfast',
        'gourmet dining & unlimited non-alcoholic drinks',
        'a King Size bed',
        'a bathtub',
      ],
    },

    standardOptions: {
      title: 'Standard',
      price: '$2 bilion',
      time: '48 hours in space',
      options: ['a photo with the entire crew'],
    },

    premiumOptions: {
      title: 'Premium',
      price: '$3 bilion',
      time: '48 hours in space',
      options: [
        'butler service',
        'free access to the pool and sauna'
      ],
    },
  },
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
    },
  ],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
