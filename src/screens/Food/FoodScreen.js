import React from "react";
import Image from "next/image";
import { photos } from "./images.js";
import styles from "./Food.module.css";


function FoodScreen() {
  return (
    <>
      <div className={styles.photoGrid}>
        {photos.map((photo) => (
          <div className={styles.photoContainer} key={photo.id}>
            <Image src={photo.src} alt={photo.alt} fill />
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodScreen;
