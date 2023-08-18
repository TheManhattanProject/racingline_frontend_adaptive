import { dateToString } from "@/lib/utils";
import Image from "next/image";
import { useMemo } from "react";
import styles from "./CardHeader.module.scss";

function CardHeader({ data: { first_name, last_name, reputation, created_at, profile_image } }) {
  console.log(first_name, last_name, reputation, created_at, profile_image);
  const time = useMemo(() => dateToString(created_at), [created_at]);
  return (
    <div className={styles.cardHeader}>
      <div className={styles.userDetails}>
        <figure>
          {profile_image ? (
            <Image
              src={profile_image}
              alt={"profile"}
              className={styles.img}
              fill
            />
          ) : (
            <div className={styles.userPrf}>{first_name?.slice(0, 1) || ''}</div>
          )}
        </figure>
        <span>{`${first_name} ${last_name}` ?? "User"}</span>
      </div>

      <div className={styles.pollStats}>
        <div className={styles.creationDate}>
          <figure>
            <Image src="/dstatic/polls/gadi.svg" alt={"profile"} className={styles.img} fill />
          </figure>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
