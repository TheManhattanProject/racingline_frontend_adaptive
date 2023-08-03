import Image from "next/image";
import styles from "./element2.module.css";
import img3 from "../../../public/dstatic/home/element2/f1ls.png";
import img4 from "../../../public/dstatic/home/element2/trackls.png";
import img9 from "../../../public/dstatic/home/element2/clockls.png";
const Element2 = () => {
  return (
    <div className={styles.element2}>
      <div className={styles.element2container}>
        <div className={styles.element2row}>
          <div className={styles.carImg}>
            <Image src="/dstatic/home/element2/car1short.png" fill={true} />
          </div>
          <div className={styles.carImg2}>
            <Image className={styles.carImgT} src="/dstatic/home/element2/car1c.png" fill={true} />
          </div>
          <div className={styles.cardInfo}>
            <h4 className={styles.cardTitle1}>
              Follow the Chase with Racingline
            </h4>
            <p className={styles.cardDescription}>
              Welcome to the ultimate destination for auto-racing enthusiasts.
              Out platform is designed for people who love everything about
              auto-racing from the sound of engines revving to the thrill of the
              race.
            </p>
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
          <div className={styles.carImg}>
          <Image src="/dstatic/home/element2/car2short.png" fill={true} />
          </div>
          <div className={styles.carImg2}>
          <Image src="/dstatic/home/element2/car2c.png" fill={true}/>
          </div>     
        </div>
        <div className={styles.element2row}>
        <div className={styles.carImg}>
            <Image src="/dstatic/home/element2/car3short.png" fill={true} />
          </div>
          <div className={styles.carImg2}>
            <Image className={styles.carImgT} src="/dstatic/home/element2/car3c.png" fill={true} />
          </div>
          <div className={styles.cardInfo3}>
            <h4 className={styles.cardTitle3}>STAY UPDATED ON THE GO</h4>
            <p className={styles.cardDescription}>
              In the world of car buzz, there&apos;s something new coming up all
              the time and keeping track of magazines or blogs isn&apos;t easy.{" "}
            </p>
            <div className={styles.band}>
              Racingline&apos;s Trending Feed puts together all the new buzz for
              motorheads to access anytime, share their thoughts, or interact
              with other users on the latest trends.
            </div>
            <Image src={img9} alt="" className={styles.clockls} />
          </div>
        </div>
        <h4 className={styles.element2row3}>
          Looking for answers to your auto-racing questions?
        </h4>
        <div className={styles.element2row2}>
          <p className={styles.text}>
            Explore our community of enthusiasts and get the information you
            need to <br />
            become better, faster, and more passionate to your love for cars.
          </p>
          <button className={styles.button}>SHOW ME</button>
        </div>
      </div>
    </div>
  );
};

export default Element2;
