import Link from 'next/link';
import styles from './SidebarOptions.module.css';
import askR from '/public/mstatic/question_list/askR.png';
import hotR from '/public/mstatic/question_list/hotR.png';
import logout from '/public/mstatic/question_list/logout.png';
import pollsR from '/public/mstatic/question_list/pollsR.png';
import profile from '/public/mstatic/question_list/profile.png';
import questionR from '/public/mstatic/question_list/questionR.png';
import questions from '/public/mstatic/question_list/questions.png';
import searchR from '/public/mstatic/question_list/searchR.png';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SidebarOptions = (props) => {
  const loggedIn = props.isLoggedIn;
  const router = useRouter();
  return (
    <div className={styles.maincontain}>
      <div
        className={
          router.pathname == '/question_list'
            ? styles.flexrowbetweenBg
            : styles.flexrowbetween
        }
      >
        {router.pathname == '/question_list' ? (
          <Image
            src={questionR}
            className={styles.questionLogoR}
            height={10.74}
            width={12.35}
            alt="QuestionR"
          />
        ) : (
          <Image
            src={questions}
            className={styles.questionLogo}
            height={10.74}
            width={12.35}
            alt="Questions"
          />
        )}

        <div>
          <Link href="/question_list" className={styles.link}>
            <h1
              className={
                router.pathname == '/question_list'
                  ? styles.sidebarlistitemtitleBg
                  : styles.sidebarlistitemtitle
              }
            >
              Questions
            </h1>
          </Link>
        </div>
      </div>

      <div
        className={
          router.pathname == '/ask'
            ? styles.flexrowbetweenBg
            : styles.flexrowbetween
        }
      >
        {router.pathname == '/ask' ? (
          <Image
            src={askR}
            className={styles.askLogo}
            height={14.38}
            width={13.64}
            alt="Ask"
          />
        ) : (
          <Image
            src="/static/questions/sidebar/ask.png"
            className={styles.askLogo}
            height={14.38}
            width={13.64}
            alt="Ask"
          />
        )}

        <div>
          <Link href="/ask" className={styles.link}>
            <h1
              className={
                router.pathname == '/ask'
                  ? styles.sidebarlistitemtitleBg
                  : styles.sidebarlistitemtitle
              }
            >
              {' '}
              Ask{' '}
            </h1>
          </Link>
        </div>
      </div>

      <div
        className={
          router.pathname == '/hotquestions'
            ? styles.flexrowbetweenBg
            : styles.flexrowbetween
        }
      >
        {router.pathname == '/hotquestions' ? (
          <Image
            src={hotR}
            className={styles.fireLogo}
            height={14.38}
            width={13.64}
            alt="Hot Questions"
          />
        ) : (
          <Image
            src="/static/questions/sidebar/Fire.png"
            className={styles.fireLogo}
            height={15.23}
            width={10.5}
            alt="Hot Questions"
          />
        )}

        <div>
          <Link href="/hotquestions" className={styles.link}>
            <h1
              className={
                router.pathname == '/hotquestions'
                  ? styles.sidebarlistitemtitleBg
                  : styles.sidebarlistitemtitle
              }
            >
              Hot Questions
            </h1>
          </Link>
        </div>
      </div>

      <div
        className={
          router.pathname == '/polls'
            ? styles.flexrowbetweenBg
            : styles.flexrowbetween
        }
      >
        {router.pathname == '/polls' ? (
          <Image
            src={pollsR}
            className={styles.pollLogo}
            height={13.34}
            width={15.77}
            alt="Polls"
          />
        ) : (
          <Image
            src="/static/questions/sidebar/poll.png"
            className={styles.pollLogo}
            height={13.34}
            width={15.77}
            alt="Polls"
          />
        )}

        <div>
          <Link href="/polls" className={styles.link}>
            <h1
              className={
                router.pathname == '/polls'
                  ? styles.sidebarlistitemtitleBg
                  : styles.sidebarlistitemtitle
              }
            >
              Polls
            </h1>
          </Link>
        </div>
      </div>

      <div
        className={
          router.pathname == '/search'
            ? styles.flexrowbetweenBg
            : `${styles.flexrowbetween}`
        }
      >
        {router.pathname == '/search' ? (
          <Image
            src={searchR}
            className={styles.searchLogo}
            height={13.03}
            width={12.48}
            alt="SearchImage"
          />
        ) : (
          <Image
            src="/static/questions/sidebar/Search.png"
            className={styles.searchLogo}
            height={13.03}
            width={12.48}
            alt="SearchImage"
          />
        )}

        <div>
          <Link href="/search" className={styles.link}>
            <h1
              className={
                router.pathname == '/search'
                  ? styles.sidebarlistitemtitleBg
                  : styles.sidebarlistitemtitle
              }
            >
              Search
            </h1>
          </Link>
        </div>
      </div>

      {loggedIn === true && (
        <>
          <div className={`${styles.flexrowbetween} ${styles.marginT}`}>
            <Image
              src={profile}
              className={styles.profileLogo}
              height={16}
              width={16}
              alt="Profile"
            />

            <div>
              <Link href="/profile" className={styles.link}>
                <h1 className={styles.sidebarlistitemtitle}> VIEW PROFILE</h1>
              </Link>
            </div>
          </div>
          <div className={styles.flexrowbetween}>
            <Image
              src={logout}
              className={styles.logoutLogo}
              height={12}
              width={12}
              alt="logout"
            />

            <div>
              <Link href="/logout" className={styles.link}>
                <h1 className={styles.sidebarlistitemtitle}>LOG OUT</h1>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SidebarOptions;
