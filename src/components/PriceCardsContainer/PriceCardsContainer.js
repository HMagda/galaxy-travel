import React from 'react';
import PriceCard from '../PriceCard/PriceCard';
import styles from './PriceCardsContainer.module.scss';
import {initialState} from '../../redux/store';

const PriceCardsContainer = () => {
  const optionsIncluded = initialState.optionsIncluded;

  return (
    <>
      <div className={styles.container}>
        <PriceCard
          title={optionsIncluded.basicOptions.title}
          price={optionsIncluded.basicOptions.price}
          time={optionsIncluded.basicOptions.time}
          included={optionsIncluded.basicOptions.options}
          annotation='mandatory pre-departure training (10 days) included'
        />
        <PriceCard
          title={optionsIncluded.standardOptions.title}
          price={optionsIncluded.standardOptions.price}
          time={optionsIncluded.standardOptions.time}
          included={optionsIncluded.basicOptions.options
            .concat(optionsIncluded.standardOptions.options
            )}
          annotation='mandatory pre-departure training (10 days) included'
        />
        <PriceCard
          title={optionsIncluded.premiumOptions.title}
          price={optionsIncluded.premiumOptions.price}
          time={optionsIncluded.premiumOptions.time}
          included={optionsIncluded.basicOptions.options
            .concat(optionsIncluded.standardOptions.options)
            .concat(optionsIncluded.premiumOptions.options
            )}
          annotation='mandatory pre-departure training (10 days) included'
        />
      </div>
    </>
  );
};

export default PriceCardsContainer;
