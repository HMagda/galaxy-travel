import React, {useState, useEffect} from 'react';
// import {initialState} from '../../redux/store';
import styles from './CustomerOpinion.module.scss';

const url = 'https://randomuser.me/api/?results=3';

const CustomerOpinion = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <h1 className={styles.heading}>What our customers say about us</h1>
      <div className={styles.opinion_wrapper}>
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
                <img className={styles.img} src={large} alt={first} />

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
                    ? `${styles.opinion_right}`
                    : `${styles.opinion_left}`
                } `}
              >
                <p className={styles.opinion}>
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
      </div>
    </>
  );
};

export default CustomerOpinion;
