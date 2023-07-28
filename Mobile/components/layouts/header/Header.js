import { useState } from 'react';
import styles from './Header.module.scss';
import SidebarLoggedInWithoutImage from '/components/layouts/sidebar/SidebarImageNameHandler/sidebarLoggedInWithoutImage';
import SidebarWithoutLoggedIn from '/components/layouts/sidebar/SidebarImageNameHandler/sidebarWithoutLoggedIn';
import SidebarOptions from '/components/layouts/sidebar/SidebarOptions/SidebarOptions';
import Imagetag from '/components/ui/image';
import useAuthUser from '/hooks/useAuthUser';
import cup from '/public/mstatic/profile/cup.png';
import hamburger from '/public/mstatic/profile/hamicon.png';
import logo from '/public/mstatic/questions/Racingline logo.svg';

var options = ['Questions', 'Ask', 'Hot questions', 'Interesting', 'Search'];
var reputation = 0;

export default function Header(props) {
  const [isLoggedIn, { first_name, last_name, profile_img }] = useAuthUser();
  const [menu, setMenu] = useState(false);
  const handleSidebarClose = () => setMenu(!menu);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <div className={styles.leftContainer}>
          <div className={styles.hamburger} onClick={() => setMenu(!menu)}>
            <Imagetag src={hamburger} className={styles.hamIcon} />
          </div>
          <div className={styles.racingLogoContainer}>
            <Imagetag
              src={logo}
              className={styles.logo}
              width={228}
              height={70.81}
            />
          </div>
        </div>
        <div className={menu === true ? styles.cupNone : styles.cupContainer}>
          <Imagetag
            src={cup}
            className={styles.cupLogo}
            width={40}
            height={40}
          />
        </div>
        <div
          className={
            menu === true
              ? `${styles.sidebar} ${styles.showSidebar}`
              : styles.sidebar
          }
        >
          {!isLoggedIn && (
            <SidebarWithoutLoggedIn menu={menu} onClose={handleSidebarClose} />
          )}

          <div>
            {isLoggedIn && profile_img !== '' ? (
              <SidebarLoggedInWithImage
                ProfileImage={profile_img}
                FirstName={first_name}
                reputation={reputation}
              />
            ) : (
              <SidebarLoggedInWithoutImage
                FirstName={first_name}
                reputation={reputation}
                menu={menu}
                onClose={handleSidebarClose}
              />
            )}
          </div>
          <div className={styles.listitems}>
            <SidebarOptions isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </nav>
    </header>
  );
}
