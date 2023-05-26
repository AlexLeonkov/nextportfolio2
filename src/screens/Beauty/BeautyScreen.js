import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { newPhotos,PhotosMobile } from "./images.js";
import styles from "./Beauty.module.css";



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















































// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { photos } from "./images.js";
// import styles from "./Beauty.module.css";

// //import Header from "../layout/header";

// import Header from "../../components/Header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeft,
//   faArrowRight,
//   faCircleXmark,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";

// import { useGalery } from "@component/providers/GaleryProvider.js";

// function BeautyScreen() {
//   const { isOneImageMode, setIsOneImageMode } = useGalery();
//   const [id, setId] = useState(null);
//   const [height, setHeight] = useState(720);

//   const handleCLick = (id) => {
//     setIsOneImageMode(true);
//     setId(id);
//   };

//   const ref = useRef(null);

//   useEffect(() => {
//     ref.current.focus();
//     setHeight(screen.height * 0.8);
//   }, []);

//   const handleKeyDown = (e) => {
//     console.log(e);
//     if (e.key === "ArrowRight") {
//       handleNextImage();
//     } else if (e.key === "ArrowLeft") {
//       handlePreviousImage();
//     }
//   };

//   const handleNextImage = () => {
//     let nextId = id - 1;

//     if (nextId < 1) {
//       setId(1);
//     } else {
//       setId(nextId);
//     }
//   };

//   const handlePreviousImage = () => {
//     let previousId = id + 1;

//     if (previousId > photos.length ) {
//       setId(photos.length);
//     } else {
//       setId(previousId);
//     }
//   };

//   return (
//     <section tabIndex={-1} ref={ref} onKeyDown={handleKeyDown}>
//       {isOneImageMode && (
//         <div className={styles.imageContainer}>
//           <FontAwesomeIcon
//             size="2xl"
//             className={styles.leftArrow}
//             onKeyDown={handleKeyDown}
//             onClick={handlePreviousImage}
//             icon={faArrowLeft}
//           />

//           <div onClick={() => setIsOneImageMode(false)}>
//             <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} />
//           </div>
//           <Image
//             className={styles.oneImage}
//             fill
//             style={{
//               zIndex: 100,
//             }}
//             src={`/newBeauty/${id}.jpg`}
//             alt={id}
//           />

//           <FontAwesomeIcon
//             className={styles.rightArrow}
//             onKeyDown={handleKeyDown}
//             onClick={handleNextImage}
//             icon={faArrowRight}
//             size="2xl"
//           />
//         </div>
//       )}

//       {!isOneImageMode && (
//         <div className={styles.photoGrid}>
//           {photos.map((photo) => (
//             <div className={styles.photoContainer} key={photo.id}>
//               <Image
//                 className={styles.photo}
//                 onClick={() => handleCLick(photo.id)}
//                 src={photo.src}
//                 alt={photo.alt}
//                 fill
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// export default BeautyScreen;
