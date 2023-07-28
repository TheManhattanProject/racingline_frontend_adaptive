import Image from 'next/image';
import styles from './element3.module.css';
import img1 from '/public/mstatic/home/element3/ask.png';
import img4 from '/public/mstatic/home/element3/formulacar.png';
import img2 from '/public/mstatic/home/element3/help.png';
import img3 from '/public/mstatic/home/element3/share.png';
import img5 from '/public/mstatic/home/element3/steering.png';

const Element3 = () => {
  return (
    <>
      <div className={styles.element3}>
        <div className={styles.element3container}>
          <div className={styles.upperText}>
            what can you do with racingline?
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
          <div className={styles.formulacardiv}>
            <Image src={img4} className={styles.formulacar} />
          </div>
          <div className={styles.element3row2}>
            <div className={styles.lowerText}>
              With Racingline, interacting with people just like you has become
              easier.
              <span className={styles.lowerTextRed}>
                {' '}
                Finding your own community and group of car lovers is just a few
                clicks away.
              </span>
            </div>
            <div className={styles.lowerText2}>
              <span className={styles.lowerTextRed}>Here on the platform,</span>{' '}
              connect with other fans and enthusiasts from around the world,
              make new friends, and share your love of the sport.
            </div>
          </div>
          <div className={styles.element3row3}>
            <div>
              <Image src={img5} className={styles.steering} />
              <span>Go on and take the wheel today!</span>
            </div>
            <button className={styles.button}>GO TO FEED</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Element3;
