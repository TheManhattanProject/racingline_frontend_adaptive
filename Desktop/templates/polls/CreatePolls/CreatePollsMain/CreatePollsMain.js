import Mde from "@/components/ui/mde/index";
import Spinner from "@/components/ui/spinner/index";
import useAuthUser from "@/hooks/useAuthUser";
import post from "@/lib/post";
import { CreatePolls } from "@/lib/urls";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import OptionCard from "../Options/OptionCard";
import styles from "./CreatePollsMain.module.scss";

function CreatePollsMain({ setModalToggle }) {
  const [value, setValue] = useState("");
  const [title, settile] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsValue, setTagsValue] = useState("");
  const [choices, setChoices] = useState();
  var [choicesArr, setChoicesArr] = useState([{}, {}]);
  const [choicesCount, setChoicesCount] = useState([1, 2]);
  const [name, setName] = useState();
  const [prf, setPrf] = useState();
  const [spin, setSpin] = useState(false);

  const [cookies, setCookie] = useCookies([
    "token",
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
  const Router = useRouter();
  const [show, setsetshow] = useState(false);

  useEffect(() => {
    if (!choices) return;
    if (choicesArr[choices.i]) {
      choicesArr[choices.i] = choices.value;
    } else {
      setChoicesArr((prv) => [...prv, choices.value]);
    }
  }, [choices]);

  useEffect(() => {
    console.log(choicesCount);
    console.log(choicesArr);
    if (choicesArr.length > 2) {
      setsetshow(true);
    }
  }, [choicesArr]);

  const [isLoggedIn, { first_name, last_name, profile_img, reputation }] = useAuthUser();
  useEffect(() => {
    const name = `${cookies.firstName} ${cookies.lastName}`;
    setName(name);
    setPrf(profile_img);
  }, []);

  const addTags = (event) => {
    var newtag = event.target.value.trim();
    if (newtag !== "") {
      if (tags.indexOf(newtag) > -1) {
      } else {
        setTags([...tags, newtag]);
      }
      event.target.value = "";
      setTagsValue("");
    }
  };
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const removeoption = (indexToRemove) => {
    if (choicesArr.length <= 2) return;
    return (
      setChoicesArr((prv) => [
        ...prv.filter((_, index) => index !== indexToRemove),
      ]),
      setChoicesCount((prv) => [
        ...prv.filter((_, index) => index !== indexToRemove),
      ]),
      setChoices()
    );
  };
  const postTheShit = (e) => {
    if (spin) true;
    if (!value) return;
    if (!title) return;
    if (!tags || tags.length == 0) return;
    if (!choicesArr || choicesArr.length == 0) return;

    setSpin(true);
    const postData = {
      title: title,
      description: value,
      choices: choicesArr,
      tags: tags,
    };
    console.log(postData);
    post({ url: CreatePolls, cookies, body: postData })
      .then((result) => { console.log(result); setModalToggle(false); })
      .catch((e) => console.log(e));
    setSpin(false);
    Router.reload();
  };
  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardHeader}>
          <div className={styles.details}>
            <figure>
              {prf ? (
                <Image src={prf} alt={"profile"} className={styles.img} fill />
              ) : (
                <div className={styles.userPrf}>{name && name.slice(0, 1)}</div>
              )}
            </figure>

            <span>{name ?? "User"}</span>
          </div>
          <span
            className={styles.cross}
            onClick={() => {
              setModalToggle(false);
            }}
          >
            X
          </span>
        </div>
        <hr className={styles.breakline1} />
        <div className={styles.content}>
          <h1>What’s Your Poll Question?</h1>
          <section className={styles.textWrapperTitle}>
            <hr className={styles.breakline2} />
            <input
              type="text"
              className={styles.textAreainpt}
              placeholder="Type here..."
              onChange={(e) => settile(e.target.value)}
              value={title}
            />
            <hr className={styles.breakline2} />
          </section>
          <h1>Describe Your Poll</h1>
          <section className={styles.textWrapper}>
            <div className={`${styles.textAreaContainer} creatpolls`}>
              {/* <TextArea value={value} setValue={setValue} /> */}
              <Mde setMarkdownValue={setValue} />
            </div>
            <hr className={styles.breakline2} />
          </section>

          <section className={styles.optionContainer}>
            <div className={styles.optionList}>
              {choicesArr.map((item, index) => {
                return (
                  <OptionCard
                    key={index}
                    show={show}
                    index={index}
                    item={item}
                    setChoices={setChoices}
                    removeoption={removeoption}
                  />
                );
              })}
            </div>
            <span
              className={styles.addOption}
              onClick={(e) => {
                // choices &&
                // 	choicesArr[choicesArr.length - 1] != '' &&
                // 	setChoicesCount(prv => [...prv, prv.length + 1]);
                // choices &&
                // choices.value != choicesArr[choicesArr.length - 1] &&
                setChoicesArr((prv) => [...prv, {}]);
                setChoices();
              }}
            >
              Add Another Option
            </span>
          </section>

          <section className={styles.tagsContainer}>
            <h2>Tag Your Poll:</h2>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Add Relevant Keywords..."
                value={tagsValue || ""}
                onKeyUp={(event) => (event.key === " " ? addTags(event) : null)}
                onChange={(e) => {
                  setTagsValue(e.target.value);
                }}
                required
              />
              <hr className={styles.breakline3} />
            </div>
          </section>
          <div className={styles.tagList}>
            {tags.map((item, key) => (
              <div className={styles.tagItem} key={key}>
                <div>{item}</div>
                <button
                  onClick={() => {
                    removeTags(key);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <button className={styles.submitBtn} onClick={postTheShit}>
            {spin ? <Spinner /> : "POST"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreatePollsMain;
