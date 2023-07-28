import classes from './Error.module.css';
import Image from 'next/image';

function MobileError() {
  return (
    <div className={classes.mains}>
      <div className={classes.logoContainer}>
        <Image
          src="/static/NoInternet/Racinglinelogos.png"
          width={311}
          height={97}
          className={classes.headerimg}
        />
      </div>
      <div className={classes.context}>
        <div className={classes.title}>
          <p className={classes.title_bold}>NO INTERNET</p>
          <p className={classes.title_simple}>
            Check your internet <br /> connection to load the page <br />
            you are looking for.
          </p>
        </div>
        <div className={classes.error_image_div}>
          <Image
            src="/static/NoInternet/errorimage.png"
            alt="no internet"
            fill={true}
            className={classes.error_image}
          />
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button}>TRY AGAIN</button>
        </div>
      </div>
      <div className={classes.patternRegion}></div>
    </div>
  );
}

export default MobileError;
