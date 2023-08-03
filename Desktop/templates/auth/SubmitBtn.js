import React from "react";
import styles from "./SubmitBtn.module.scss";

function SubmitBtn({ children, onClickHandler, loading, state = null }) {
  return (
    <button className={children==="Sign Up"?`${styles.signUpSubmit}`:`${styles.submitBtn}`} onClick={onClickHandler}>
      {loading?<img src="/static/loginReg/loader.svg" />:children}
    </button>
  );
}

export default SubmitBtn;
