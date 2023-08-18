import useAuthUser from "@/hooks/useAuthUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CreatePollsMain from "../CreatePolls/CreatePollsMain/CreatePollsMain";
import PollsList from "../Polls/PollsList";
import styles from "./PollsMain.module.scss";

export default function Polls({ polls }) {
  const [isLoggedIn, user] = useAuthUser();
  const [ModalToggle, setModalToggle] = useState(false);
  const Router = useRouter();
  const popupcreatepollup = () => {
    if (!isLoggedIn) return Router.push("/auth/login");
    return setModalToggle(true);
  };
  return (
    <>
      {ModalToggle && <CreatePollsMain setModalToggle={setModalToggle} />}
      <section className={styles.pollListSection}>
        <div className={styles.shithr}>
          <hr />
        </div>
        <div className={styles.heading}>
          <h1>Create A poll</h1>
          <figure onClick={popupcreatepollup}>
            <Image src="../../../dstatic/polls/next.png" alt={"next"} className={styles.img} fill />
          </figure>
        </div>
        <hr className={styles.breakline1} />
        <PollsList polls={polls} />
        <div className={styles.pageChangeWrapper}></div>
      </section></>
  );
}
