import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { newPhotos,PhotosMobile } from "../screens/Beauty/images.js";
import styles from "./Beauty.module.css";

//import Header from "../layout/header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useGalery } from "@component/providers/GaleryProvider.js";
import Photo from "@component/components/Photo/Photo.js";
import Column from "@component/components/Column/Column.js";

function BeautyScreen() {
  const { isOneImageMode, setIsOneImageMode } = useGalery();
  const [id, setId] = useState(null);
  const [height, setHeight] = useState(720);
  const [isMobile, setIsMobile] = useState(false);

  const [photosSqn, setPhotosSqn] = useState(newPhotos);
  const handleCLick = (id) => {
    setIsOneImageMode(true);
    setId(id);
  };

  function handleReload() {
    closeHandler();
  }

  useEffect(() => {
    window.innerWidth <= 500 ? setPhotosSqn(PhotosMobile) : setPhotosSqn(newPhotos);
  }, []);

  return (
    // <div className={styles.wrapper}>
    //   <div className={styles.container}>
    //     {photos.map((photo) => (
    //       <Photo key={photo.id} src={photo.src} alt={photo.alt} id={photo.id} />
    //     ))}
    //   </div>
    // </div>

    <div className={styles.row}>
      <Column photos={photosSqn.column1} />
      <Column photos={photosSqn.column2} />
      <Column photos={photosSqn.column3} />
      <Column photos={photosSqn.column4} />
      <Column photos={photosSqn.column5} />
    </div>
  );
}

export default BeautyScreen;
