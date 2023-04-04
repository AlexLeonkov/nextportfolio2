import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { photos } from "./images.js";
import styles from "./Beauty.module.css";

//import Header from "../layout/header";

import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useClickState } from "@component/Hooks/useClickState.js";

function BeautyScreen() {
  const [clicked, clickHandler, closeHandler] = useClickState();
  const [id, setId] = useState(null);

  const handleCLick = (id) => {
    clickHandler();
    setId(id);
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "ArrowRight") {
      handleNextImage();
    } else if (e.key === "ArrowLeft") {
      handlePreviousImage();
    }
  };

  const handleNextImage = () => {
    let nextId = id + 1;

    if (nextId === 8) {
      setId(9);
      return;
    }
    if (nextId > photos.length) {
      setId(photos.length);
    } else {
      setId(nextId);
    }
  };

  const handlePreviousImage = () => {
    let previousId = id - 1;

    if (previousId === 8) {
      setId(7);
      return;
    }

    if (previousId < 1) {
      setId(1);
    } else {
      setId(previousId);
    }
  };

  return (
    <div tabIndex={-1} ref={ref} onKeyDown={handleKeyDown}>
      {clicked && (
        <div  className={styles.imageContainer}>
          <FontAwesomeIcon
            size="2xl"
            className={styles.leftArrow}
            onKeyDown={handleKeyDown}
            onClick={handlePreviousImage}
            icon={faArrowLeft}
          />

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

          <FontAwesomeIcon
            className={styles.rightArrow}
            onKeyDown={handleKeyDown}
            onClick={handleNextImage}
            icon={faArrowRight}
            size="2xl"
          />
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
    </div>
  );
}

export default BeautyScreen;
