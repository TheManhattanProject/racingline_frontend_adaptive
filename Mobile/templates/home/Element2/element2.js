import Image from 'next/image';
import styles from './element2.module.css';
import img10 from '/public/mstatic/home/element2/band.png';
import img1 from '/public/mstatic/home/element2/car1.png';
import img2 from '/public/mstatic/home/element2/car1850.png';
import img5 from '/public/mstatic/home/element2/car2.png';
import img6 from '/public/mstatic/home/element2/car2850.png';
import img8 from '/public/mstatic/home/element2/car3.png';
import img9 from '/public/mstatic/home/element2/car3850.png';
import img4 from '/public/mstatic/home/element2/f1back850.png';
import img3 from '/public/mstatic/home/element2/f1backmob.png';
import img7 from '/public/mstatic/home/element2/trackback.png';
const Element2 = () => {
  return (
    <div className={styles.element2}>
      <div className={styles.element2container}>
        <div className={styles.element1row}>
          <Image src={img1} className={styles.carImg} />
          <Image src={img2} className={styles.carImg850} />
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>
              Follow<br></br> the Chase with<br></br>Racingline
            </div>
            <div className={styles.cardDescription1}>
              Welcome to the ultimate destination for auto-racing enthusiasts.
              Out platform is designed for people who love everything about
              auto-racing from the sound of engines revving to the thrill of the
              race.
            </div>
          </div>
          <Image src={img3} alt="" className={styles.f1backmob} />
          <Image src={img4} alt="" className={styles.f1backmob850} />
        </div>
        <div className={styles.element2row}>
          <Image src={img5} className={styles.carImg} />
          <Image src={img6} className={styles.carImg850} />
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>
              An Open<br></br> Track for Car<br></br> Lovers
            </div>
            <div className={styles.cardDescription2}>
              Whether you&apos;re a seasoned pro or just getting started, our
              community is the perfect place to connect with other fans, ask
              questions, get answers, share your experiences, and earn
              reputation points by interacting with others.
            </div>
          </div>
          <Image src={img7} alt="" className={styles.trackback} />
        </div>
        <div className={styles.element3row}>
          <Image src={img8} className={styles.carImg} />
          <Image src={img9} className={styles.carImg850} />
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>
              STAY<br></br> UPDATED ON <br></br>THE GO
            </div>
            <div className={styles.cardDescription3}>
              In the world of car buzz, there&apos;s something new coming up all
              the time and keeping track of magazines or blogs isn&apos;t easy.{' '}
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <Image src={img10} className={styles.band} />
          </div>
          <div className={styles.containerCont}>
            <div className={styles.bandtext}>Racingline’s Trending Feed</div>
            <div className={styles.puttogether}>
              puts together all the new buzz for motorheads to access anytime,
              share their thoughts, or interact with other users on the latest
              trends.
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container2heading}>
            Looking for answers to your auto-racing questions?
          </div>
          <div className={styles.communityInfo}>
            <div>
              Explore our community of enthusiasts and get the information you
              need to become better, faster, and more passionate to your love
              for cars.
            </div>
            <button>SHOW ME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element2;
