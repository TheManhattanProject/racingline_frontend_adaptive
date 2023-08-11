import styles from "./tags.module.css";
const Tag = (props) => {
  return (
        <div
          className={`${styles.tag} ${props.IDNum % 2 == 0 ? styles.blue : ""}  ${
            props.IDNum % 2 == 1 ? styles.orange : ""
          }`}
        >
          <div className={styles.text}>{props.Title}</div>
    </div>
  );
};
export default Tag;
