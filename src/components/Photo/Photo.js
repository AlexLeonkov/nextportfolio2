import React, { use, useEffect } from "react";
import styles from "./Photo.module.css";
import { photos } from "../../screens/Beauty/images.js";
import Image from "next/image";
function Photo({ src, alt}) {
  useEffect(() => {
    console.log(src);
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
    

        <img className={styles.photo} src={src} alt={alt} ></img>
      </div>
    </div>
  );
}

export default Photo;
