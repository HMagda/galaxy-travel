import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = (props) => {
  return (
    <div className={styles.formInput}>
      {/* <label>{props.value}</label> */}
      <input required name={props.name} placeholder={props.placeholder}/>
    </div>
  );
};

export default FormInput;
