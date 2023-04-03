import React, { useState } from "react";
import Image from "next/image";
import { photos } from "./images.js";
import styles from "./Beauty.module.css";

//import Header from "../layout/header";

import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useClickState } from "@component/Hooks/useClickState.js";

function BeautyScreen() {
  // const [clicked, setClicked] = useState(false);

  const [clicked, clickHandler, closeHandler] = useClickState(false);
  const [id, setId] = useState(null);
  // const clickHandler = (id) => {
  //   setId(id);
  //   setClicked((current) => !current);

  // };

  const handleCLick = (id) => {
    clickHandler();

    setId(id);
  };

  return (
    <>
      {clicked && (
        <div className={styles.imageContainer}>
          <div onClick={closeHandler}>
            <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} />
          </div>
          <Image
            className={styles.oneImage}
            width={432}
            height={540}
            style={{
              zIndex: 100,
            }}
            src={`/beauty/${id}.jpg`}
            alt={id}
          />
          {/* <div
            style={{
              height: "10px",
              position: "absolute",
              bottom: "0",
            }}
          ></div> */}
        </div>
      )}

      {!clicked && (
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div className={styles.photoContainer} key={photo.id}>
              <Image
                onClick={() => handleCLick(photo.id)}
                src={photo.src}
                alt={photo.alt}
                fill
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BeautyScreen;
