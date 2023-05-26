import React, { use, useEffect } from "react";
import styles from "./Column.module.css";
import { photos } from "../../screens/Beauty/images.js";
import Image from "next/image";
function Column({ photos}) {
  useEffect(() => {
    console.log(photos);
  });
  return (
    <div className={styles.column}>
    {photos.map((photo) => (

      <img src={photo.src} alt={photo.alt} key={photo.id} />
    ))}
    </div>
  );
}

export default Column;
