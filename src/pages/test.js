import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { photos } from "../screens/Beauty/images.js";
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

function BeautyScreen() {
  const { isOneImageMode, setIsOneImageMode } = useGalery();
  const [id, setId] = useState(null);
  const [height, setHeight] = useState(720);

  const handleCLick = (id) => {
    setIsOneImageMode(true);
    setId(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {photos.map((photo) => (
          <Photo src={photo.src} alt={photo.alt} id={photo.id} />
        ))}
      </div>
    </div>
  );
}

export default BeautyScreen;
