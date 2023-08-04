import Image from "next/image";
import styles from "./element4.module.css";

const Element4 = () => {
  return (
    <div className={styles.element4}>
      <div className={styles.element4row1}>
        <div className={styles.checkbox}>
          <Image
            src="/dstatic/home/element4/checkbox.png"
            className={styles.setPositionInitalTrue}
            fill={true}
          />
        </div>
        <div className={styles.checkbox2}>
          <Image
            src="/dstatic/home/element4/checkbox2.png"
            className={styles.setPositionInitalTrue}
            fill={true}
          />
        </div>
        <div className={styles.element4row1title}>CHECKPOINT</div>
        <h2 className={styles.element4row1description}>
          Racingline has more in-store for you
        </h2>
      </div>
      <p className={styles.element4row4}>
        What&apos;s in having a little fun? Interactions on Racingline are
        rewarded with Reputation Points and Levels.
      </p>
      <div className={styles.element4row}>
        <div className={styles.track}>
          <Image
            src="/dstatic/home/element4/track.webp"
            className={styles.setPositionInitalTrue}
            fill={true}
          />
        </div>
        <div className={styles.element4rowtext1}>
          <h4>
            Ask Valuable Questions and <br /> Draft Valuable Answers
          </h4>
          <p>
            To keep the platform a place worth everyone&apos;s time, make sure
            your contributions are relevant to the topic of discussion and the
            platform’s purpose.
          </p>
        </div>
        <div className={styles.element4rowtext2}>
          <h4>
            Get Upvoted for <br /> Your Contributions
          </h4>
          <p>
            For maintaining and adding value to the community, get tons of
            upvotes to your posts by the users of the community.
            <br></br>
            <br></br>
            Upvotes and Downvotes help you understand what content is relevant,
            helpful, and loved by others.
          </p>
        </div>
        <div className={styles.element4rowtext3}>
          <h4>WIN REPUTATION POINTS</h4>
          <p>
            For each worthwhile contribution and upvote you get, earn reputation
            points that help you stand out from other users.
            <br></br>
            <br></br>
            Your reputation points are a direct reflection of your activity on
            the platform, that lets users know you’re active, knowledgable, and
            reliable.
          </p>
        </div>
        <div className={styles.element4rowtext4}>
          <h4>level up with a set of tasks</h4>
          <p>
            Where&apos;s the fun without a little competition. Racingline
            provides you with a set of tasks to fulfil as part of your
            interactions.
            <br></br>
            <br></br>
            These goals and tasks help you level up and earn titles and status
            across the platform - making your answers and questions even more
            worthwhile to the community.
          </p>
        </div>
      </div>
      <div className={styles.element4row2}>
        <h4 className={styles.element4row2title}>
          It’s a race to the finish line, after all!
        </h4>
        <div className={styles.checkbox}>
          <Image
            src="/dstatic/home/element4/checkbox.png"
            className={styles.setPositionInitalTrue}
            fill={true}
          />
        </div>
        <div className={styles.checkbox2}>
          <Image
            src="/dstatic/home/element4/checkbox2.png"
            className={styles.setPositionInitalTrue}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Element4;
