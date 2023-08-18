import styles from "./Tag.module.scss";

function tags({ tags }) {
  if (!tags?.length) return <div className={styles.tagsContainer}></div>;
  return (
    <div className={styles.tagsContainer}>
      {tags &&
        tags.map((title, key) => {
          return <div key={key}>{title}</div>;
        })}
    </div>
  );
}

export default tags;
