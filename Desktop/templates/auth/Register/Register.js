import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { signup } from "../../../lib/urls";
import Footer from "../Footer";
import Header from "../Header";
import SubmitBtn from "../SubmitBtn";
import TagInput from "../TagInput";
import styles from "./Register.module.scss";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/;
function Register() {
  const router = useRouter();
  const [interestedTags, setInterestedTags] = useState([]);
  const [activeTag, setActiveTag] = useState("");

  const [firstName, setFirstName] = useState("");
  const [emptyFirstName, setEmptyFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [emptyLastName, setEmptyLastName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setVaildEmail] = useState(true);
  const [emptyEmail, setEmptyEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [emptyPwd, setEmptyPwd] = useState(false);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [validation, setValidation] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies([
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
    "redirectRoute",
  ]);

  const getTags = useCallback((tags) => {
    setInterestedTags(tags);
  }, []);

  useEffect(() => {
    if (!firstName || !lastName || !email || !password || !validEmail) {
      setValidation(false);
      setLoading(false);
    }
    else {
      setValidation(true);
      setLoading(false);
    }
  }, [firstName, lastName, email, password])

  const submitHandler = async () => {
    setEmptyFirstName(false);
    setEmptyLastName(false);
    setEmptyEmail(false);
    setEmptyPwd(false);
    setError(false)
    // console.log(firstName, lastName, email, password);
    setVaildEmail(EMAIL_REGEX.test(email));
    if (!firstName) {
      setEmptyFirstName(true);
    }
    if (!lastName) {
      setEmptyLastName(true);
    }
    if (!email) {
      setEmptyEmail(true);
    }
    if (!password) {
      setEmptyPwd(true);
    }
    if (!validation) {
      return;
    }
    try {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw;
      if (!interestedTags) {
        raw = JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          user_interests: interestedTags,
        });
      } else {
        raw = JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          user_interests: [activeTag],
        });
      }

      console.log(raw);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        const response = await fetch(signup, requestOptions);
        const result = await response.text();
        const dataJSON = await JSON.parse(result);
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
        setCookie("users", { name: 'user1', password: 'foo' }, { path: "/" }); // { name: 'user1', password: 'foo' }
        setCookie("profileImage", "", {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        console.log("This is result", result);
        // router.push("/question_list");
      } catch (e) {
        setError(true);
        setLoading(false);
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setInterestedTags([]);
    } catch (err) {
      alert(err);
    }
  };
  const removeTags = (indexToRemove) => {
    setInterestedTags([...interestedTags.filter((_, index) => index !== indexToRemove)]);
  };

  return (
    <div className={styles.registerContainer}>
      <Header />
      <main className={styles.main}>
        <section className={styles.legendSection}>
          <Image className={styles.legend}
            src="/dstatic/auth/racecar.png"
            priority
            alt={"race car"}
            fill
          />
        </section>
        {/* for <1.6 */}
        <section className={`${styles.inputArea} ${styles.lessthen1_6}`}>
          {(emptyFirstName || emptyLastName || emptyEmail || emptyPwd) && (
            <div className={styles.errormsg1}>
              *Please check if all entries are filled.
            </div>
          )}
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <div className={`${styles.inputContainer} ${emptyFirstName && styles.error}`}>
                <input
                  className={`${styles.input} `}
                  placeholder={"first name"}
                  value={firstName}
                  type="text"
                  onChange={(e) => {
                    setEmptyFirstName(false);
                    setFirstName(e.target.value);
                  }}
                  required
                />
                <div className={`${styles.bottomBorder} ${emptyFirstName && styles.error}`}></div>
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={`${styles.inputContainer} ${emptyLastName && styles.error}`}>
                <input
                  className={`${styles.input} `}
                  placeholder={"last name"}
                  value={lastName}
                  type="text"
                  onChange={(e) => {
                    setEmptyLastName(false);
                    setLastName(e.target.value);
                  }}
                  required
                />
                <div className={`${styles.bottomBorder} ${emptyLastName && styles.error}`}></div>
              </div>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={`${styles.inputWrapper}`}>
              <div className={`${styles.inputContainer} ${emptyEmail && styles.error}`}>
                {error && <div className={styles.errorMsg}>*This e-mail already exists</div>}
                {!validEmail && <div className={styles.errorMsg}>*This e-mail is invalid</div>}
                <input
                  className={`${styles.input} `}
                  placeholder={"e-mail"}
                  value={email}
                  type="email"
                  onChange={(e) => {
                    setVaildEmail(EMAIL_REGEX.test(email));
                    setEmptyEmail(false);
                    setEmail(e.target.value);
                  }}
                  required
                />
                <div className={`${styles.bottomBorder} ${emptyEmail && styles.error}`}></div>
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <div className={`${styles.inputContainer} ${emptyPwd && styles.error}`}>
                <input
                  className={`${styles.input} `}
                  placeholder={"password"}
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setEmptyPwd(false);
                    setPassword(e.target.value);
                  }}
                  required
                />
                <div className={`${styles.bottomBorder} ${emptyPwd && styles.error}`}></div>
              </div>
            </div>
          </div>
          <div className={`${styles.inputGroup} ${styles.lastRow}`}>
            <div className={styles.inputWrapper}>
              <TagInput
                getTags={getTags}
                activeTagHandler={setActiveTag}
                interestedTags={interestedTags}
                tags={[]}

              />
            </div>
            <div className={`${styles.inputWrapper} ${styles.lastRow} ${styles.cta}  `}>
              <SubmitBtn onClickHandler={submitHandler} loading={loading}>Sign Up</SubmitBtn>
            </div>
          </div>
          <div className={styles.tagArea}>
            {!interestedTags.length && <span className={styles.suggest}>Eg. F1 Racing</span>}
            <div className={styles.tags_input}>
              <ul className={styles.tags}>
                {interestedTags.map((tag, index) => (
                  <li key={index} className={styles.tag}>
                    <div className={styles.tag_title}>{tag}</div>
                    <div
                      className={styles.tag_close_icon}
                      onClick={() => removeTags(index)}
                    >
                      X
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* for >1.6 */}
        <section className={`${styles.inputArea} ${styles.morethen1_6}`}>
          {(emptyFirstName || emptyLastName || emptyEmail || emptyPwd) && (
            <div className={styles.errormsg1}>
              *Please check if all entries are filled.
            </div>
          )}
          <div className={`${styles.inputWrapper} ${styles.wrprHor}`}>
            <div className={`${styles.inputContainer} ${emptyFirstName && styles.error}`}>
              <input
                className={`${styles.input} `}
                placeholder={"first name"}
                value={firstName}
                type="text"
                onChange={(e) => {
                  setEmptyFirstName(false);
                  setFirstName(e.target.value);
                }}
                required
              />
              <div className={`${styles.bottomBorder} ${emptyFirstName && styles.error}`}></div>
            </div>
            <div className={`${styles.inputContainer} ${emptyLastName && styles.error}`}>
              <input
                className={`${styles.input} `}
                placeholder={"last name"}
                value={lastName}
                type="text"
                onChange={(e) => {
                  setEmptyLastName(false);
                  setLastName(e.target.value);
                }}
                required
              />
              <div className={`${styles.bottomBorder} ${emptyLastName && styles.error}`}></div>
            </div>
          </div>
          <div className={`${styles.inputContainer} ${emptyEmail && styles.error}`}>
            {error && <div className={styles.errorMsg}>*This e-mail already exists</div>}
            {!validEmail && <div className={styles.errorMsg}>*This e-mail is invalid</div>}
            <input
              className={`${styles.input} `}
              placeholder={"e-mail"}
              value={email}
              type="email"
              onChange={(e) => {
                setVaildEmail(EMAIL_REGEX.test(email));
                setEmptyEmail(false);
                setEmail(e.target.value);
              }}
              required
            />
            <div className={`${styles.bottomBorder} ${emptyEmail && styles.error}`}></div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={`${styles.inputContainer} ${emptyPwd && styles.error}`}>
              <input
                className={`${styles.input} `}
                placeholder={"password"}
                value={password}
                type="password"
                onChange={(e) => {
                  setEmptyPwd(false);
                  setPassword(e.target.value);
                }}
                required
              />
              <div className={`${styles.bottomBorder} ${emptyPwd && styles.error}`}></div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <TagInput
              getTags={getTags}
              activeTagHandler={setActiveTag}
              interestedTags={interestedTags}
              tags={[]}

            />

          </div>
          <div className={styles.tagArea}>
            {!interestedTags.length && <span className={styles.suggest}>Eg. F1 Racing</span>}
            <div className={styles.tags_input}>
              <ul className={styles.tags}>
                {interestedTags.map((tag, index) => (
                  <li key={index} className={styles.tag}>
                    <div className={styles.tag_title}>{tag}</div>
                    <div
                      className={styles.tag_close_icon}
                      onClick={() => removeTags(index)}
                    >
                      X
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className={`${styles.inputWrapper} ${styles.lastRow} ${styles.cta} ${styles.ctasignup} `}>
              <SubmitBtn onClickHandler={submitHandler} loading={loading}>Sdfssdfdsfsd Up</SubmitBtn>
            </div> */}
        </section>
      </main>
      <Footer state={"signUp"} onClickHandler={submitHandler} loading={loading} />
    </div>
  );
}

export default Register;