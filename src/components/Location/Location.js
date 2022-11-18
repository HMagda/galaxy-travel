import React from 'react';
import Map from '../Map/Map';
import styles from './Location.module.scss';

const Location = () => {
  return (
    <div className={styles.location_container}>
      <h1>Our Training Center</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ex
        ligula. Proin auctor tellus.
      </p>
      <Map />
    </div>
  );
};

export default Location;
