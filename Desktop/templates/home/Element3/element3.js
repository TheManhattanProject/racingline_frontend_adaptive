import Image from "next/image";
import styles from "./element3.module.css";

const Element3 = () => {
  return (
    <div className={styles.element3}>
      <div className={styles.element3row}>
        <div className={styles.element3container}>
          <h3 className={styles.leftUpperText}>
            what <br></br>can you <br></br>do with<br></br> racingline?
          </h3>
          <div className={styles.upperflex}>
            <div>
              <span>
                <div className={styles.icons}>
                  <Image
                    src="/dstatic/home/element3/ask.png"
                    className={styles.setPositionInitial}
                    fill={true}
                  />
                </div>
              </span>
              <span>
                <div className={styles.upperTitle}>ASK QUESTIONS</div>
                <p className={styles.upperDescription}>
                  Have a burning question about auto racing? Our community is
                  the perfect place to get answers from other experts and
                  enthusiasts.
                </p>
              </span>
            </div>
            <div>
              <span>
                <div className={styles.icons}>
                  <Image
                    src="/dstatic/home/element3/help.png"
                    className={styles.setPositionInitial}
                    fill={true}
                  />
                </div>
              </span>
              <span>
                <div className={styles.upperTitle}>HELP OTHERS</div>
                <p className={styles.upperDescription}>
                  If you&apos;re an expert in the field or have a knack for the
                  field, you can help answer questions and share your knowledge
                  with others.
                </p>
              </span>
            </div>
            <div>
              <span>
                <div className={styles.icons}>
                  <Image
                    src="/dstatic/home/element3/share.png"
                    className={styles.setPositionInitial}
                    fill={true}
                  />
                </div>
              </span>
              <span>
                <div className={styles.upperTitle}>SHARE YOUR VIEWS</div>
                <p className={styles.upperDescription}>
                  Comment your thoughts, experiences, and opinions on all things
                  auto racing, from the latest news to people&apos;s opinions.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.element3row2}>
        <h5 className={styles.lowerText}>
          With Racingline, interacting with people just like you has become
          easier.
          <span className={styles.hidden}>s</span>
          <span className={styles.lowerTextRed}>
            Finding your <br />
            own community and group of car lovers is just a few clicks away.
          </span>
        </h5>
        <h5 className={styles.lowerText2}>
          <span className={styles.lowerTextRed}>Here on the platform,</span>
          <span className={styles.hidden}>s</span>
          connect with other fans and enthusiasts from
          <br /> around the world, make new friends, and share your love of{" "}
          <br /> sport.
        </h5>
        <div className={styles.formulacar}>
          <Image
            src="/dstatic/home/element3/formulacar.webp"
            className={styles.setPositionInitial}
            fill={true}
          />
        </div>
        <div className={styles.formulacarshort}>
          <Image
            src="/dstatic/home/element3/formulacarshort.png"
            className={styles.setPositionInitial}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.element3row3}>
        <span className={styles.line1} />
        <div className={styles.steering}>
          <Image
            src="/dstatic/home/element3/steering.png"
            className={styles.setPositionInitial}
            fill={true}
          />
        </div>
        <h3 className={styles.textcenter}>Go on and take the wheel today!</h3>
        <button className={styles.button}>GO TO FEED</button>
        <span className={styles.line2} />
      </div>
    </div>
  );
};

export default Element3;
