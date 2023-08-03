import styles from "@/styles/Home.module.css";
import Home from "@/templates/home/Main";
import Image from "next/image";

export default function Index() {

  // const imageLoader = ({ src, width, quality }) => {
  //   return `${src}?w=${width}&q=${quality || 75}`
  // }

  const imageLoader = ({ src, width, quality }) => {
    return `${src}`
  }



  return (
    <Home/>
  );
}
