import React from 'react';
import styles from './HeroImage.module.scss';

const HeroImage = ({cta}) => {
  return (
    <div className={styles.hero_img}>
      <div className={styles.heading}>
        <h1>{cta}</h1>
      </div>
    </div>
  );
};

export default HeroImage;
