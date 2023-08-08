import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function useAuthUser() {
  const [cookies, setCookie] = useCookies();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    profile_img: '',
    reputation: 0
  });
  useEffect(() => {
    const currentdate = new Date();
    const refreshTokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
    if (
      cookies.refreshToken === undefined ||
      cookies.refreshToken === 'undefined' ||
      refreshTokenExpiryTime <= currentdate
    ) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
      setUser({
        first_name: cookies.firstName,
        last_name: cookies.lastName,
        profile_img: cookies.profileImage,
        reputation: cookies.reputation ?? 0
      });
    }
  }, [cookies]);
  console.log();
  return [isLoggedIn, user];
}
