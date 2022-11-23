import React from 'react';
import Map from '../Map/Map';
import styles from './Location.module.scss';

const Location = () => {
  return (
    <div className={styles.location_container}>
      <div className={styles.description}>
        <h1>Our Training Center</h1>
        <p>
          GALAXY TRAVEL TRAINING CENTER <br />
          300 E. Street SW, Suite 5R30 <br />
          Washington, DC 20546 <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean rutrum congue mauris, sit amet lacinia odio euismod sit amet. Etiam pellentesque eget enim in finibus. Donec iaculis, urna a rutrum viverra, nisi nulla dignissim odio, et viverra neque nulla et purus. Nulla iaculis fringilla accumsan. 
        </p>
      </div>
      <Map />
    </div>
  );
};

export default Location;
