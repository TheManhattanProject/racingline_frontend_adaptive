import styles from "./SidebarOptions.module.css";
import Link from "next/link";
import Image from "next/image";

const SidebarOptions = (props) => {
  return (
    <div className={styles.maincontain}>
      <div
        className={`${styles.flexrowbetween} ${styles.sidebarlistitemselected}`}
      >
        <div className={styles.icon}>
          <Image
            src="/dstatic/hotquestions/sidebar/questions.png"
            height={25}
            width={24}
            className={styles.setInitialPositionTrue}
            alt="Hot Questions"
            fill={true}
          />
        </div>
        <Link href="/question_list" className={styles.link}>
          <h1 className={styles.sidebarlistitemtitle}>Questions</h1>
        </Link>
      </div>

      <div className={`${styles.flexrowbetween}`}>
        <div className={styles.icon}>
          <Image
            src="/dstatic/hotquestions/sidebar/ask.png"
            height={25}
            width={24}
            className={styles.setInitialPositionTrue}
            alt="Ask"
            fill={true}
          />
        </div>
        <Link href="/ask" className={styles.link}>
          <h1 className={`${styles.sidebarlistitemtitle}`}>Ask</h1>
        </Link>
      </div>

      <div className={`${styles.flexrowbetween}`}>
        <div className={styles.bgQuestions}></div>
        <div className={styles.questionsBox}>
          <Link href="/hotquestions" className={styles.linkQuestions}>
            <div className={styles.icon}>
              <Image
                src="/dstatic/hotquestions/sidebar/Fire.png"
                height={24}
                width={25}
                className={styles.setInitialPositionTrue}
                alt="Questions"
                fill={true}
              />
            </div>

            <h1
              className={`${styles.sidebarlistitemtitle} ${styles.sidebarlistitemtitleselected}`}
            >
              Hot Questions
            </h1>
          </Link>
        </div>
      </div>

      <div className={`${styles.flexrowbetween}`}>
        <div className={styles.icon}>
          <Image
            src="/dstatic/hotquestions/sidebar/poll.png"
            height={18.6}
            width={22}
            className={styles.setInitialPositionTrue}
            alt="Polls"
            fill={true}
          />
        </div>
        <Link href="/polls" className={styles.link}>
          <h1 className={`${styles.sidebarlistitemtitle}`}>Polls</h1>
        </Link>
      </div>

      <div className={styles.flexrowbetween}>
        <div className={styles.icon}>
        <Image
          src="/dstatic/hotquestions/sidebar/Search.png"
          height={25}
          width={24}
          className={styles.setInitialPositionTrue}
          alt="SearchImage"
          fill={true}
        />
        </div>
        
        <Link href="/search" className={styles.link}>
          <h1 className={styles.sidebarlistitemtitle}>Search</h1>
        </Link>
      </div>
    </div>
  );
};
export default SidebarOptions;
