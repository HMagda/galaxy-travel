import React from "react";
import styles from "./SocialIcon.module.scss";

const SocialIcon = (props) => {
  return (
    <div className={styles.social_elem}>
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </div>
  );
};

export default SocialIcon;
