import styles from "./Sidebar.module.scss";
import { useCookies } from "react-cookie";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Sidebar = (props) => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState("Not logged in");
  const [firstName, setFirstName] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const options = [
    "Questions",
    "Ask",
    "Hot questions",
    "Interesting",
    "Search",
    "Rules",
  ];

  const [cookies, setCookie, removeCookie] = useCookies([
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
  ]);

  useEffect(() => {
    var currentdate = new Date();
    const refreshTokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
    if (
      cookies.profileImage == undefined ||
      cookies.refreshToken === undefined ||
      cookies.refreshToken === "undefined" ||
      refreshTokenExpiryTime <= currentdate
    ) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }

    if (cookies.profileImage === "" || cookies.profileImage == "undefined") {
      setProfileImage("");
    } else {
      setProfileImage(cookies.profileImage);
    }
    setFirstName(cookies.firstName);
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarquoteNotLoggedIn}>
      <Image
        className={styles.setInitialPositionTrue}
        src="/static/hotquestions/logo.png"
        width={300}
        height={100}
        fill={true}
      />
      </div>
      
      <hr className={styles.hr} />
      <div className={styles.detailsWrapper}>
        {isLoggedIn ? (
          <p className={styles.name}>Hi,{cookies.firstName}</p>
        ) : (
          <p className={styles.name}>Hi,Racer</p>
        )}

        <div className={styles.subWrapper}>
          {isLoggedIn ? (
            <>
              <p>Your current reputation is at</p>
              <p className={styles.points}>{props.reputation}</p>
              <p>points.</p>
            </>
          ) : (
            <>
              <p className={styles.infoText}>
                Looking to contribute?
                <br />
              </p>
              {/* <p className={styles.infoText}>Your current reputation is at<br/></p> */}
              <Link href="/login">
                <h2 className={styles.pointsText}>
                  Log In / Sign Up
                  <br />
                </h2>
              </Link>
            </>
          )}
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.listitems}>
        <SidebarOptions />
      </div>
    </div>
  );
};
export default Sidebar;
