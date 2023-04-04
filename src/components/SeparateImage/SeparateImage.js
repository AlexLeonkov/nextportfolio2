// import Link from "next/link";
// import React, { useState } from "react";
// import styles from "./SeparateImage.module.css";

// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeft,
//   faArrowRight,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { useClickState } from "@component/Hooks/useClickState";

// function SeparateImage({ id, setId, closeHandler }) {
 

//   const handleKeyDown = (e) => {
//     console.log(e);
//     if (e.key === "ArrowRight") {
//       handleNextImage();
//     } else if (e.key === "ArrowLeft") {
//       handlePreviousImage();
//     }
//   };

//   // const refEl = useRef(null);

//   // useEffect(() => {
//   //   refEl.current.focus();
//   // }, []);

//   const handleNextImage = () => {
//     let nextId = id + 1;
//     if (nextId > photos.length) {
//       setId(photos.length);
//     } else {
//       setId(nextId);
//     }
//   };

//   const handlePreviousImage = () => {
//     let previousId = id - 1;

//     if (previousId < 1) {
//       setId(1);
//     } else {
//       setId(previousId);
//     }
//   };

//   return (
//     <div
//       //   ref={refEl}
//       tabIndex={-1}
//       onKeyDown={handleKeyDown}
//       className={styles.imageContainer}
//     >
//       <FontAwesomeIcon
//         size="2xl"
//         className={styles.leftArrow}
//         onKeyDown={handleKeyDown}
//         onClick={handlePreviousImage}
//         icon={faArrowLeft}
//       />

//       <div onClick={closeHandler}>
//         <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} />
//       </div>
//       <Image
//         className={styles.oneImage}
//         width={432}
//         height={540}
//         style={{
//           zIndex: 100,
//         }}
//         src={`/beauty/${id}.jpg`}
//         alt={id}
//       />
//       {/* <div
//             style={{
//               height: "10px",
//               position: "absolute",
//               bottom: "0",
//             }}
//           ></div> */}

//       <FontAwesomeIcon
//         className={styles.rightArrow}
//         onKeyDown={handleKeyDown}
//         onClick={handleNextImage}
//         icon={faArrowRight}
//         size="2xl"
//       />
//     </div>
//   );
// }

// export default SeparateImage;
