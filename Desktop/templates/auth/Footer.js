import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
import SubmitBtn from "./SubmitBtn";

function Footer({ state = "login", submitHandler, loading = null, onClickHandler = null }) {
  return (
    <>
      <footer className={`${styles.footer} ${state !== "login" && styles.signupFooter} ${styles.oldfooter}`}>
        {state === "login"
          ? <h4>
            Don’t have an account?{" "}<Link className={styles.link} href={"/auth/signup"}><span >Sign up</span></Link>
          </h4>
          : <h4>
            Already have an account?{" "}<Link className={styles.link} href={"/auth/login"}><span >Log in</span></Link>
          </h4>
        }
      </footer>
      <footer className={`${styles.footer} ${state !== "login" && styles.signupFooter} ${styles.newfooter}`}>
        <div className={`${styles.newfooterwrpr}  `}>
          {state === "login"
            ? <h4>
              Don’t have an account?{" "}<Link className={styles.link} href={"/auth/signup"}><span >Sign up</span></Link>
            </h4>
            : <h4>
              Already have an account?{" "}<Link className={styles.link} href={"/auth/login"}><span >Log in</span></Link>
            </h4>
          }
        </div>
        {
          state === "login"
            ? <div className={`${styles.inputWrapper} ${styles.lastRow}`}> <SubmitBtn onClickHandler={submitHandler}>login</SubmitBtn>  </div>
            : <div className={`${styles.inputWrapper} ${styles.lastRow} ${styles.signup}`}> <SubmitBtn onClickHandler={onClickHandler} >Signup</SubmitBtn>  </div>
        }
      </footer>
    </>
  );
}

export default Footer;


