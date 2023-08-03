import styles from './footer.module.css';
import ImageTag from '/components/ui/image.jsx';
import logo from '/public/mstatic/questions/Racingline logo.svg';

export default function Footer() {
  return (
    <div className={styles.parent}>
      <div className={styles.track}></div>
      <div className={styles.footer}>
        <div className={styles.infoContainer}>
          <div className={styles.subContainer}>
            <div className={styles.heading}>COMPANY</div>
            <div className={styles.content}>
              <p>About Us</p>
              <p>Work with Us</p>
              <p>Contact Us</p>
              <p>Rules</p>
              <p>T&C</p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.heading}>PRODUCTS</div>
            <div className={styles.content}>
              <p>XYZ</p>
              <p>XYZ</p>
              <p>XYZ</p>
              <p>XYZ</p>
            </div>
          </div>
        </div>
        <div className={styles.racinglineLogo}>
          <ImageTag
            src={logo}
            height={69.24}
            width={334.56}
            alt="racinglineLogo"
          />
        </div>
        <div className={styles.bottomText}>
          <p>© 2022 SHORTSQUEEZE PRIVATE LIMITED</p>
        </div>
      </div>
    </div>
  );
}
