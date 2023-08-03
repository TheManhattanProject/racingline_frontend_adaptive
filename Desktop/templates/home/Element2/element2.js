import Image from "next/image";
import styles from "./element2.module.css";
import img3 from "../../../public/dstatic/home/element2/f1ls.png";
import img4 from "../../../public/dstatic/home/element2/trackls.png";
import img5 from "../../../public/dstatic/home/element2/car2short.png";
import img6 from "../../../public/dstatic/home/element2/car2c.png";
import img7 from "../../../public/dstatic/home/element2/car3short.png";
import img8 from "../../../public/dstatic/home/element2/car3c.png";
import img9 from "../../../public/dstatic/home/element2/clockls.png";
const Element2 = () => {
  return (
    <div className={styles.element2}>
      <div className={styles.element2container}>
        <div className={styles.element2row}>
          <div className={styles.carImg}>
            <Image src="/dstatic/home/element2/car1short.png" fill={true} />
          </div>
          <div className={styles.carImgTest}>
            <Image src="/dstatic/home/element2/car1c.png" fill={true} />
          </div>

          <div className={styles.cardInfo}>
            <div className={styles.cardTitle1}>
              Follow the Chase with Racingline
            </div>
            <div className={styles.cardDescription}>
              Welcome to the ultimate destination for auto-racing enthusiasts.
              Out platform is designed for people who love everything about
              auto-racing from the sound of engines revving to the thrill of the
              race.
            </div>
            <Image src={img3} alt="" className={styles.f1ls} />
          </div>
        </div>
        <div className={styles.element2row}>
          <div className={styles.cardInfo2}>
            <div className={styles.cardTitle2}>
              An Open Track for Car Lovers
            </div>
            <div className={styles.cardDescription}>
              Whether you&apos;re a seasoned pro or just getting started, our
              community is the perfect place to connect with other fans, ask
              questions, get answers, share your experiences, and earn
              reputation points by interacting with others.
            </div>
            <Image src={img4} alt="" className={styles.trackls} />
          </div>
          <Image src={img5} className={styles.carImg} />
          <Image src={img6} className={styles.carImg2} />
        </div>
        <div className={styles.element2row}>
          <Image src={img7} className={styles.carImg} />
          <Image src={img8} className={styles.carImg2} />
          <div className={styles.cardInfo3}>
            <div className={styles.cardTitle3}>STAY UPDATED ON THE GO</div>
            <div className={styles.cardDescription}>
              In the world of car buzz, there&apos;s something new coming up all
              the time and keeping track of magazines or blogs isn&apos;t easy.{" "}
            </div>
            <div className={styles.band}>
              Racingline&apos;s Trending Feed puts together all the new buzz for
              motorheads to access anytime, share their thoughts, or interact
              with other users on the latest trends.
            </div>
            <Image src={img9} alt="" className={styles.clockls} />
          </div>
        </div>
        <div className={styles.element2row3}>
          Looking for answers to your auto-racing questions?
        </div>
        <div className={styles.element2row2}>
          <div className={styles.text}>
            Explore our community of enthusiasts and get the information you
            need to <br />
            become better, faster, and more passionate to your love for cars.
          </div>
          <button className={styles.button}>SHOW ME</button>
        </div>
      </div>
    </div>
  );
};

export default Element2;
