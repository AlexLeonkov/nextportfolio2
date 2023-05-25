import React from 'react'
import styles from "./Photo.module.css";
import {photos} from '../../screens/Beauty/images.js'
import Image from 'next/image';
function Photo({photo}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
     
          {/* <Image className={styles.photo} src={photos[1].src} alt={photos[0].alt} fill/> */}
       
     <img className={styles.photo} src={photos[1].src} alt="1"></img>

    
      </div>
    </div>
  )
}

export default Photo 