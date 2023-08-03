import React from "react";
import { useEffect } from "react";
import styles from "./TagInput.module.scss";

const TagsInput = (props) => {
  console.log("these are the props", props)
  // const [tags, setTags] = React.useState(props.interestedTags);

  const addTags = (event) => {
    if (event.target.value.trim() !== "") {
      props.setSelectedTags([...props.interestedTags, event.target.value]);
      event.target.value = "";
      props.activeTagHandler("")
    }
  };

  return (
    <div className={`${styles.interestInput} ${props.errorStyle ? styles.error : ''}`}>
      {/* <div className={styles.errorMsg}>*This e-mail does not exist</div> */}
      <input
        className={styles.inputfield}
        type="text"
        onKeyUp={(event) => (event.key === " " ? addTags(event) : null)}
        onChange={(e)=>{
          props.activeTagHandler(e.target.value)
        }}
        placeholder="Interests"
      />
      <div className={`${styles.bottomBorder} ${props.errorStyle ? styles.error: ''}`} />
    </div>
  );
};

const TextTags = (props) => {
  return (
    <div className={styles.TextTags_container}>
      <TagsInput
        setSelectedTags={props.getTags}
        interestedTags={props.interestedTags}
        activeTagHandler = {props.activeTagHandler}
        errorStyle = {props.errorStyle}
      />
    </div>
  );
};

export default React.memo(TextTags);
