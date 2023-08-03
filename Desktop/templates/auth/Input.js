import React, { useState } from "react";
import styles from "./Input.module.scss";

function Input({ placeholder, onChangeHandler, value,identifier }) {
  return (
    <div className={`${styles.inputContainer} ${errorStyle ? styles.error : ''}`}>
      <div className={styles.errorMsg}>*This e-mail does not exist</div>
      <input
        className={`${styles.input} `}
        placeholder={placeholder}
        value={value}
        type={placeholder=="password"?"password":"text"}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
        required
      />
      <div className={`${styles.bottomBorder} ${errorStyle ? styles.error: ''}`}></div>
    </div>
  );
}

export default Input;
