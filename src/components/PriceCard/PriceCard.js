import React from 'react';
import styles from './PriceCard.module.scss';

function handleSubmit(e) {
  e.preventDefault();
  console.log('booked');
}

const PriceCard = ({title, price, details}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>

      <h2 className={styles.price}>{price}</h2>
      <p>{details}</p>
      <button type='submit' className={styles.btn} onClick={handleSubmit}>
        book now!
      </button>
    </div>
  );
};

export default PriceCard;
