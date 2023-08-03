import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Image from "next/image";
import Link from 'next/link'
// components & images 
import racecarImg from "../../../public/dstatic/auth/racecar.png";
import Header from "../Header";
import Footer from "../Footer";
import SubmitBtn from "../SubmitBtn";
import { login } from "../../../lib/urls";
import styles from "./Login.module.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [emptyPwd, setEmptyPwd] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies([
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
    "redirectRoute",
    "routeQuery",
  ]);

  const submitHandler = async () => {
    if (!email) {
      setEmptyEmail(true);
    }
    if (!password) {
      setEmptyPwd(true);
    }
    if (!email || !password) {
      return;
    }
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: email,
      password: password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(login, requestOptions);
      const result = await response.text();
      const dataJSON = await JSON.parse(result);
      console.log(dataJSON);
      if (dataJSON.error) {
        setErrMessage(dataJSON.error);
      }
      setLoading(false);
      setCookie("accessToken", dataJSON.access_token, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("accessTokenExpiresAt", dataJSON.access_token_expires_at, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("refreshToken", dataJSON.refresh_token, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("refreshTokenExpiresAt", dataJSON.refresh_token_expires_at, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("firstName", dataJSON.user.first_name, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("lastName", dataJSON.user.last_name, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });

      setCookie("profileImage", dataJSON.user.profile_image, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setEmail("");
      setPassword("");
      if (
        cookies.redirectRoute !== undefined &&
        cookies.routeQuery === undefined
      ) {
        router.push(cookies.redirectRoute);
      } else if (
        cookies.redirectRoute !== undefined &&
        cookies.routeQuery !== undefined
      ) {
        router.push({
          pathname: cookies.redirectRoute,
          query: cookies.routeQuery,
        });
      } else {
        router.push("/question_list");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Header />
      <main className={styles.main}>
        <section className={styles.legendSection}>
          <Image
            src={racecarImg}
            alt={"race car"}
            className={styles.legend}
            fill
          />
        </section>
        <section className={styles.inputArea}>
          <div className={styles.inputWrapper}>
            <div className={`${styles.inputContainer} ${emptyEmail && styles.error}`}>
              {errMessage == "User does not exist" && <div className={styles.errorMsg}>*This e-mail does not exists</div>}
              <input
                className={`${styles.input} `}
                placeholder={"e-mail"}
                value={email}
                type={"text"}
                onChange={(e) => {
                  setEmptyEmail(false);
                  setEmail(e.target.value);
                }}
                required
              />
              <div className={`${styles.bottomBorder} ${emptyEmail && styles.error}`}></div>
            </div>
          </div>
          <div className={`${styles.inputGroup} ${styles.lastRow}`}>
            <div className={`${styles.inputWrapper} ${styles.passwordInput}`}>
              <div className={`${styles.inputContainer} ${emptyPwd && styles.error}`}>
                {errMessage == "Password did not matched" && <div className={styles.errorMsg}>*Password does not match</div>}
                <input
                  className={`${styles.input} `}
                  placeholder={"password"}
                  value={password}
                  type={"password"}
                  onChange={(e) => {
                    setEmptyPwd(false);
                    setPassword(e.target.value);
                  }}
                  required
                />
                <div className={`${styles.bottomBorder} ${emptyPwd && styles.error}`}></div>
              </div>
            </div>
            <div className={`${styles.inputWrapper} ${styles.lastRow} ${styles.cta}`}>
              <SubmitBtn onClickHandler={submitHandler}>login</SubmitBtn>
            </div>
          </div>
          <p className={styles.recoveryText}>
            Forgot Password? <Link href="/forgot_password"><span>Recover Account</span></Link>
          </p>
          <div className={`${styles.SubmitBtnMobile}`}>
            <SubmitBtn onClickHandler={submitHandler} loading={loading}>login</SubmitBtn>
          </div>
        </section>
      </main>
      <Footer state={"login"} submitHandler={submitHandler} />
    </div>
  );
}

export default Login;
