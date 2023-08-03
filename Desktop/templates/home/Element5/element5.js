import styles from "./element5.module.css";
import img1 from "../../../public/dstatic/home/element4/ball.png"
import Image from "next/image";
export default function element5() {
    return (
        <div className={styles.element5}>
            <div className={styles.element5row1}>
                We value your contributions, and so does the community. We can’t
                to hear what you <br /> have to say - and personal touches are always
                welcome.
            </div>
            <div className={styles.element5row2}>
                <div className={styles.text1}>
                    But The Finish Line Is Not The Limit
                </div>
                <div className={styles.text2}>
                    The platform is constantly evolving and changing to become
                    better. We encourage our users to not limit their
                    imagination, and let their thoughts slide freely onto the
                    platform. Let other users be the judge of the race.
                </div>
                <div className={styles.element5row4}>
                    <span className={styles.line}></span>
                    <span className={styles.text3}>
                        We simply ask you to be
                    </span>
                    <span className={styles.line}></span>
                </div>
                <div className={styles.centralbar}>
                    <div className={styles.text4}>
                        <span>1</span>RESPECTFUL
                    </div>
                    <div className={styles.text4}>
                        <span>2</span>RELEVANT
                    </div>
                    <div className={styles.text4}>
                        <span>3</span>RECEPTIVE
                    </div>
                </div>
            </div>
            <div className={styles.element5row3}>
                <Image
                    src={img1}
                    className={styles.ball}
                />
                <span>
                    <div className={styles.element5row3top}>
                        Sounds as cool as what&apos;s inside the hood of your
                        favourite car?
                        <br></br>
                        Then, turn the keys and ride the wave.
                    </div>
                    <div className={styles.element5row3bottom}>
                        Yes, Sign Me Up
                    </div>
                </span>
            </div>
        </div>
    );
}
