import React from 'react'
import styles from "./Photo.module.css";
import {photos} from '../../screens/Beauty/images.js'
import Image from 'next/image';
function Photo({photo}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
     
          {/* <Image className={styles.photo} src={photos[1].src} alt={photos[0].alt} width="100%" height="100%" /> */}
       
     <img className={styles.photo} src={photos[1].src}></img>

    
      </div>
    </div>
  )
}

export default Photo 