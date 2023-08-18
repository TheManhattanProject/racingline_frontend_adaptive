import Image from "next/image";
import Link from "next/link";
import styles from "./ViewCard.module.scss";

function ViewCard(props) {
  return (
    <Link href={`/question/${props.QUUID}`} style={{ textDecoration: 'none' }}>
      <div className={styles.cardContainer}>
        <div className={styles.content}>
          <div className={styles.cardData}>
            <h4>
              {props.Title}
            </h4>
            <div className={styles.metaRow}>
              <span>{props.Time}</span>
              <span></span>
              {
                props.AnswerCount == 1 ? (
                  <span>{props.AnswerCount} Answer</span>
                ) : (
                  <span>{props.AnswerCount} Answers</span>
                )
              }
            </div>
          </div>
          <div className={styles.nextArrow}>
            <Image src="/static/question/grayArrow.png" className={styles.img} alt={"next"} fill />
          </div>
        </div>
        <hr className={styles.breakline} />
      </div>
    </Link>
  );
}

export default ViewCard;
