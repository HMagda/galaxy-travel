import React, {useState, useEffect, useRef} from 'react';
import {initialState} from '../../redux/store';
import styles from './Customer.module.scss';

const url = 'https://randomuser.me/api/?results=3';

const Customer = () => {
  const [users, setUsers] = useState(initialState.users);
  //   const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users.results);
  };

  //   const imageRef = useRef();

  //   useEffect(() => {
  //     fetchUserData();
  //   }, []);

  return (
    <>
      <section>
        {users.map((user, i) => {
          const {
            name: {first, last},
            location: {country},
            login: {uuid},
            dob: {age},
            picture: {large},
          } = user;

          return (
            <div
              key={uuid}
              className={`${styles.opinion_container} ${
                i % 2 === 0 ? '' : `${styles.flex_reverse}`
              } `}
            >
              <div className={styles.customer}>
                <img src={large} alt={first} />

                <div className={styles.customer_data}>
                  <h3>
                    {first} {last}
                  </h3>
                  <p>{age} years old</p>
                  <span>Country:</span> {country}
                </div>
              </div>

              <div
                key={i}
                className={`${
                  i % 2 === 0
                    ? `${styles.opinion_left}`
                    : `${styles.opinion_right}`
                } `}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur elementum purus tellus, vel facilisis quam
                  sollicitudin nec. Phasellus vestibulum sem sed elit convallis
                  consectetur. Vestibulum convallis, neque non tristique porta,
                  nunc mi eleifend ex, non dapibus enim ipsum ut quam. Morbi eu
                  pharetra tellus. Praesent et neque fermentum, tincidunt nunc
                  quis, suscipit libero. Integer sodales venenatis enim, non
                  auctor neque maximus ac. Duis sagittis ullamcorper placerat.
                  Praesent blandit nulla semper libero laoreet convallis.
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Customer;
