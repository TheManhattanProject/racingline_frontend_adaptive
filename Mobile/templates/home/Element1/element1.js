import Image from 'next/image';
import styles from './element1.module.css';

import img1 from '/public/mstatic/home/element1/Rectanglemv.png';
const Element1 = () => {
  return (
    <div className={styles.element1}>
      <div className={styles.element1container}>
        <div className={styles.element1contentcontainer}>
          <div className={styles.flexContainer1}>
            <div className={styles.element1content}>
              Accelerating Your <div>Passion</div>
              <div>For Cars</div>
            </div>
            <Image className={styles.element1mainSVG} src={img1} alt="" />
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.bottomText}>
            Fuel your love for all things cars, auto-racing, and automotive tech
            with a community of passionate individuals, experts, and fellow car
            enthusiasts.
          </div>
          <div className={styles.bottomButton}>Explore</div>
        </div>
      </div>
    </div>
  );
};

export default Element1;
