import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './Sidebar.module.css';
import SidebarLoggedInWithImage from '/components/question_list/DesktopVersion/Sidebar/SidebarImageNameHandler/sidebarLoggedInWithImage';
import SidebarLoggedInWithoutImage from '/components/question_list/DesktopVersion/Sidebar/SidebarImageNameHandler/sidebarLoggedInWithoutImage';
import SidebarWithoutLoggedIn from '/components/question_list/DesktopVersion/Sidebar/SidebarImageNameHandler/sidebarWithoutLoggedIn.js';
import SidebarOptions from '/components/question_list/DesktopVersion/Sidebar/SidebarOptions/SidebarOptions.js';

const Sidebar = (props) => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState('Not logged in');
  const [firstName, setFirstName] = useState('');
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const options = [
    'Questions',
    'Ask',
    'Hot questions',
    'Interesting',
    'Search',
  ];

  const [cookies, setCookie, removeCookie] = useCookies([
    'firstName',
    'lastName',
    'profileImage',
    'accessToken',
    'refreshToken',
    'accessTokenExpiresAt',
    'refreshTokenExpiresAt',
  ]);

  useEffect(() => {
    var currentdate = new Date();
    const refreshTokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
    if (
      cookies.profileImage == undefined ||
      cookies.refreshToken === undefined ||
      cookies.refreshToken === 'undefined' ||
      refreshTokenExpiryTime <= currentdate
    ) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }

    if (cookies.profileImage === '' || cookies.profileImage == 'undefined') {
      setProfileImage('');
    } else {
      setProfileImage(cookies.profileImage);
    }
    setFirstName(cookies.firstName);
  }, []);

  return (
    <div className={styles.sidebar}>
      {isLoggedIn === false && <SidebarWithoutLoggedIn />}
      <Link href={`/profile`} style={{ textDecoration: 'none' }}>
        <div>
          {isLoggedIn && profileImage === '' && (
            <SidebarLoggedInWithoutImage
              FirstName={firstName}
              reputation={props.reputation}
            />
          )}
          {isLoggedIn && profileImage !== '' && (
            <SidebarLoggedInWithImage
              ProfileImage={profileImage}
              FirstName={firstName}
              reputation={props.reputation}
            />
          )}
        </div>
      </Link>
      <div className={styles.listitems}>
        <SidebarOptions />
      </div>
    </div>
  );
};
export default Sidebar;
