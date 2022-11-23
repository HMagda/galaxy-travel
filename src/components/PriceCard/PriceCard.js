import React from 'react';
import styles from './PriceCard.module.scss';

function handleSubmit(e) {
  e.preventDefault();
  console.log('booked');
}

const PriceCard = ({title, price, time, included, annotation}) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>

      <h2 className={styles.price}>{price}</h2>

      <div className={styles.included_container}>
        <p className={styles.included}>{time}</p>

        {included.map((included_elem) => (
          <p key={included_elem} className={styles.included}>
            {included_elem}
          </p>
        ))}
      </div>

      <button type='submit' className={styles.btn} onClick={handleSubmit}>
        book now!
      </button>

      <p className={styles.annotation}>{annotation}</p>
    </div>
  );
};

export default PriceCard;
