import Link from 'next/link';
import styles from './SidebarOptions.module.css';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

const options = [
  {icon:'basil:chat-outline', url: '/question_list', name: 'QUESTIONS'}, 
  {icon:'ci:note-edit', url: '/ask', name: 'ASK'}, 
  {icon:'ri:fire-line', url: '/hotquestions', name: 'HOT QUESTIONS'}, 
  {icon:'ph:chart-bar-horizontal-thin', url: '/search', name: 'POLLS'}, 
  {icon:'material-symbols:search-rounded', url: '/polls', name: 'SEARCh'}, 
] 

const SidebarOptions = ({isLoggedIn}) => {
  const pathname = usePathname()
  return (
    <div className={styles.maincontain}>
      {
        options.map((item, i) => {
          return (
            <div key={i} className={pathname == item.url ? styles.flexrowbetweenBg : styles.flexrowbetween } >
              <Icon icon={item.icon} width={24} style={{ marginTop: '2px' }} color={pathname == item.url  ? '#d40000':'#706666'} />
              <div>
                <Link href={item.url} className={styles.link}>
                  <h1
                    className={pathname == item.url ? styles.sidebarlistitemtitleBg : styles.sidebarlistitemtitle }
                  >
                    {item.name}
                  </h1>
                </Link>
              </div>
            </div>
          )
        })
      }
      {
        isLoggedIn === true && (
        <>
          <div className={`${styles.flexrowbetween} ${styles.marginT}`}> 
              <Icon icon='iconoir:profile-circle' width={24} style={{ marginTop: '2px' }} color={'#706666'} />
            <div>
              <Link href="/profile" className={styles.link}>
                <h1 className={styles.sidebarlistitemtitle}> VIEW PROFILE</h1>
              </Link>
            </div>
          </div>
          <div className={styles.flexrowbetween}>
          <Icon icon='circum:logout' width={24} style={{ marginTop: '2px' }} color={'#706666'} />
            <div>
              <Link href="/logout" className={styles.link}>
                <h1 className={styles.sidebarlistitemtitle}>LOG OUT</h1>
              </Link>
            </div>
          </div>
        </>
        )
      }  
    </div>
  );
};
export default SidebarOptions;
