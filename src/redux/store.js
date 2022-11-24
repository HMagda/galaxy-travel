import {createStore} from 'redux';

const reducer = (state) => {
  return state;
};

export const initialState = {
  subPages: ['Home Page', 'Costs', 'How to prepare', 'Contact Us'],
  optionsIncluded: {
    basicOptions: {
      title: 'Basic',
      price: '$1 billion',
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
      price: '$2 billion',
      time: '48 hours in space',
      options: ['a photo with the entire crew'],
    },

    premiumOptions: {
      title: 'Premium',
      price: '$3 billion',
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
