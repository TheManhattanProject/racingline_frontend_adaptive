import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {

  // const imageLoader = ({ src, width, quality }) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }

  const imageLoader = ({ src, width, quality }) => {
    return `${src}`
  }



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello Desktop World</h1>
      <div className={styles.containerImg}>
        <Image loader={imageLoader} src="/dstatic/ToTheStars.png" fill={true} />
      </div>
    </div>
  );
}
