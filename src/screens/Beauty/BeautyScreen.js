import React from "react";
import Image from "next/image";
import { photos } from "../../images.js";
import styles from "./Beauty.module.css";

//import Header from "../layout/header";

import Header from "../../components/Header";

function BeautyScreen() {
  return (
    <>
      <Header />
      <div className={styles.photoGrid}>
        {photos.map((photo) => (
          <div className={styles.photoContainer} key={photo.id}>
            <Image
              src={photo.src}
              alt={photo.alt}
              // width={photo.width}
              // height={photo.height}
              layout="fill" 
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BeautyScreen;
