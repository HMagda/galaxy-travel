import React from 'react';
import styles from './Video.module.scss';
import {Link} from 'react-router-dom';
import videoSpace from '../../assets/space.mp4';

const Video = () => {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted id="video" className={styles.video}>
        <source src={videoSpace} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>Galaxy Travel</h1>
        <p>The most unforgettable experience in Your life!</p>

        <div className={styles.btn_wrapper}>
          <Link to="/training" className={styles.btn}>
            Training
          </Link>
          <Link to="/pricing" className={styles.btn}>
            booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
