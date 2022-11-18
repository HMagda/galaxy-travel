import React from 'react';
import styles from './SocialIcon.module.scss';

const SocialIcon = ({url, children}) => {
  return (
    <div className={styles.social_elem}>
      <a href={url} target='_blank' rel='noreferrer'>
        {children}
      </a>
    </div>
  );
};

export default SocialIcon;
