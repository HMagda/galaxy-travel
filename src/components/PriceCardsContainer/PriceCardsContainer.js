import React from 'react';
import PriceCard from '../PriceCard/PriceCard';
import styles from './PriceCardsContainer.module.scss';

const PriceCardsContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <PriceCard
          title='Basic'
          price='$1 bilion'
          details='to jest, tamtego nie ma'
        />
        <PriceCard
          title='Standard'
          price='$2 bilion'
          details='to jest, tamtego nie ma'
        />
        <PriceCard
          title='Premium'
          price='$3 bilion'
          details='to jest, tamtego nie ma'
        />
      </div>

     

    </>
  );
};

export default PriceCardsContainer;
