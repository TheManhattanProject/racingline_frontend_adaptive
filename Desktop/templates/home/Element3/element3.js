import Image from "next/image";
import styles from "./element3.module.css";
import img1 from "../../../public/dstatic/home/element3/ask.png";
import img4 from "../../../public/dstatic/home/element3/formulacar.webp";
import img2 from "../../../public/dstatic/home/element3/help.png";
import img3 from "../../../public/dstatic/home/element3/share.png";
import img5 from "../../../public/dstatic/home/element3/formulacarshort.png";
import img6 from "../../../public/dstatic/home/element3/steering.png";

const Element3 = () => {
  return (
    <div className={styles.element3}>
      <div className={styles.element3row}>
        <div className={styles.element3container}>
          <div className={styles.leftUpperText}>
            what <br></br>can you <br></br>do with<br></br> racingline?
          </div>
          <div className={styles.upperflex}>
            <div>
              <span>
                <Image src={img1} className={styles.icons} />
              </span>
              <span>
                <div className={styles.upperTitle}>ASK QUESTIONS</div>
                <div className={styles.upperDescription}>
                  Have a burning question about auto racing? Our community is
                  the perfect place to get answers from other experts and
                  enthusiasts.
                </div>
              </span>
            </div>
            <div>
              <span>
                <Image src={img2} className={styles.icons} />
              </span>
              <span>
                <div className={styles.upperTitle}>HELP OTHERS</div>
                <div className={styles.upperDescription}>
                  If you&apos;re an expert in the field or have a knack for the
                  field, you can help answer questions and share your knowledge
                  with others.
                </div>
              </span>
            </div>
            <div>
              <span>
                <Image src={img3} className={styles.icons} />
              </span>
              <span>
                <div className={styles.upperTitle}>SHARE YOUR VIEWS</div>
                <div className={styles.upperDescription}>
                  Comment your thoughts, experiences, and opinions on all things
                  auto racing, from the latest news to people&apos;s opinions.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.element3row2}>
        <div className={styles.lowerText}>
          With Racingline, interacting with people just like you has become
          easier.
          <span className={styles.hidden}>s</span>
          <span className={styles.lowerTextRed}>
            Finding your <br />
            own community and group of car lovers is just a few clicks away.
          </span>
        </div>
        <div className={styles.lowerText2}>
          <span className={styles.lowerTextRed}>Here on the platform,</span>
          <span className={styles.hidden}>s</span>
          connect with other fans and enthusiasts from
          <br /> around the world, make new friends, and share your love of{" "}
          <br /> sport.
        </div>
        <Image src={img4} className={styles.formulacar} />
        <Image src={img5} className={styles.formulacarshort} />
      </div>
      <div className={styles.element3row3}>
        <span className={styles.line1} />
        <Image src={img6} className={styles.steering} />
        <div className={styles.textcenter}>Go on and take the wheel today!</div>
        <button className={styles.button}>GO TO FEED</button>
        <span className={styles.line2} />
      </div>
    </div>
  );
};

export default Element3;
