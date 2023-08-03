
import styles from './Sidebar.module.css';
import Sidebar_for_LoggedIn from '../../layouts/sidebar/SidebarImageNameHandler/sidebarLoggedInWithoutImage';
import Sidebar_for_NotLoggedIn from '../../layouts/sidebar/SidebarImageNameHandler/sidebarWithoutLoggedIn';
import SidebarOptions from '../../layouts/sidebar/SidebarOptions/SidebarOptions';
import close from '/public/mstatic/profile/close.png';
import useAuthUser from '@/hooks/useAuthUser';
import Imagetag from '@/components/ui/image';

const Sidebar = ({ openSidebar, handleSidebarClose }) => {
  console.log(openSidebar);
  const [isLoggedIn, { first_name, last_name, profile_img }] = useAuthUser();
  return (
    <div className={openSidebar === true ? `${styles.sidebar} ${styles.showSidebar}` : styles.sidebar}>
      <div className={styles.topContainer}>
        <div className={styles.closeContainer} onClick={handleSidebarClose}>
          <Imagetag
            src={close}
            className={styles.closeImg}
            width={20}
            height={20}
            alt="close"
          />
        </div>
      </div>
      {
        isLoggedIn
          ? <Sidebar_for_LoggedIn FirstName={first_name} reputation={0} />
          : <Sidebar_for_NotLoggedIn />
      }
      <div className={styles.listitems}>
        <SidebarOptions isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};
export default Sidebar;
