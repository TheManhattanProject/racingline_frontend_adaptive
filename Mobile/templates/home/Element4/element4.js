import Image from 'next/image';
import styles from './element4.module.css';
import img6 from '/public/mstatic/home/element4/checkbox.png';
import img1 from '/public/mstatic/home/element4/checkbox2.png';
import img7 from '/public/mstatic/home/element4/Rimg.png';
import {
  default as img2,
  default as img3,
  default as img4,
  default as img5,
} from '/public/mstatic/home/element4/track.png';

const Element4 = () => {
  return (
    <div className={styles.element4}>
      <div className={styles.element4row1}>
        <div className={styles.checkboxCont}>
          <Image src={img1} className={styles.checkbox} />
        </div>
        <div>
          <div className={styles.element4row1title}>CHECKPOINT</div>
          <div className={styles.element4row1description}>
            Racingline has more in-store for you
          </div>
        </div>
      </div>
      <div className={styles.element4Text}>
        What&apos;s in having a little fun? Interactions on Racingline are
        rewarded with Reputation Points and Levels.
      </div>
      <div className={styles.element4row2}>
        <div className={styles.element4rowtext}>
          <div className={styles.top}>
            <div className={styles.zerospace}>
              <div className={styles.numbers}>01</div>
            </div>
          </div>
          <Image src={img2} className={styles.track} />
          <div>
            <h4 className={styles.h41}>
              Ask Valuable Questions and Draft Valuable Answers
            </h4>
            <p className={styles.p41}>
              To keep the platform a place worth everyone&apos;s time, make sure
              your contributions are relevant to the topic of discussion and the
              platform’s purpose.
            </p>
          </div>
        </div>
        <div className={styles.element4rowtext}>
          <div className={styles.top}>
            <div>
              <div className={styles.numbers}>02</div>
            </div>
          </div>
          <Image src={img3} className={styles.track} />
          <div>
            <h4 className={styles.h42}>Get Upvoted for Your Contributions</h4>
            <p className={styles.p42}>
              For maintaining and adding value to the community, get tons of
              upvotes to your posts by the users of the community.
              <br></br>
              <br></br>
              Upvotes and Downvotes help you understand what content is
              relevant, helpful, and loved by others.
            </p>
          </div>
        </div>
        <div className={styles.element4rowtext}>
          <div className={styles.top}>
            <div className={styles.numbers}>03</div>
          </div>
          <Image src={img4} className={styles.track} />
          <div>
            <h4 className={styles.h43}>WIN REPUTATION POINTS</h4>
            <p className={styles.p43}>
              For each worthwhile contribution and upvote you get, earn
              reputation points that help you stand out from other users.
              <br></br>
              <br></br>
              Your reputation points are a direct reflection of your activity on
              the platform, that lets users know you&apos;re active,
              knowledgable, and reliable.
            </p>
          </div>
        </div>
        <div className={styles.element4rowtext}>
          <div className={styles.top}>
            <div className={styles.numbers}>04</div>
          </div>
          <Image src={img5} className={styles.track} />
          <div>
            <h4 className={styles.h44}>level up with a set of tasks</h4>
            <p className={styles.p44}>
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
      </div>
      <div className={styles.lastbox}>
        <Image className={styles.checkboximage} src={img6} alt="" />
        <div className={styles.checkboximagetext}>
          It’s a race to the finish line, after all!
        </div>
      </div>
      <div className={styles.element4Text2}>
        We value your contributions, and so does the community. We can&apos;t to
        hear what you have to say - and personal touches are always welcome.
      </div>
      <div className={styles.element4Text3}>
        BUT THE FINISH LINE IS <br /> NOT THE LIMIT
      </div>
      <div className={styles.checkboxBackground}></div>
      <div className={styles.element4Text4}>
        The platform is constantly evolving and changing to become better.
        <br></br>
        <br></br>
        We encourage our users to not limit their imagination, and let their
        thoughts slide freely onto the platform. Let other users be the judge of
        the race.
      </div>
      <div className={styles.element4Text5}>
        <span></span>We simply ask you to be<span></span>
      </div>
      <div className={styles.rImagecont}>
        <Image className={styles.RImage} src={img7} alt="" />
      </div>
      <div className={styles.element4text6top}>
        <div className={styles.element4Text6}>
          <div className={styles.element4Text6text}>
            Sounds as cool as what&apos;s inside the hood of your favourite car?
            <br />
            <br />
            Then, turn the keys and ride the wave.
          </div>
        </div>
      </div>
      <div className={styles.element4Text7}>Yes, Sign Me Up</div>
    </div>
  );
};

export default Element4;
