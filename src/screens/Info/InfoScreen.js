import React from "react";

import Header from "../../components/Header";
import styles from "./Info.module.css";
import { InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPinterestP, faBehance } from "@fortawesome/free-brands-svg-icons";

const InfoScreen = () => {
  return (

      <div className={styles.about}>
        <p>
          Lena is a professional commercial product photographer based in
          Germany, specialising in advertising shoots for cosmetics and beauty
          brands.
        </p>
        <p>
          She embarked on her artistic journey in early 2013, initially focusing
          on portrait photography before expanding her expertise to collaborate
          with restaurants in the gastronomy industry.
        </p>
        <p>
          Today, Lena's main focus is on cosmetics photography, where she
          strives to make a significant contribution to the advertising of
          beauty brands. Her style is characterised by clean and concise images
          that beautifully showcase the delicate essence of each brand in a
          compelling way.
        </p>
        <p className={styles.h3}>
          <strong>LOCATION:</strong>
        </p>

        <div className={styles.infoTextUp}>
          <p>European Union</p>
          <p className={styles.location}>Berlin, Germany</p>
        </div>
        <p className={styles.h3}>
          <strong> EMAIL:</strong>
        </p>
        <p className={styles.infoTextUp}>hello@hheyphotography.com</p>
        <p className={styles.h3}>
          <strong> BOOKING:</strong>
        </p>
        <p className={styles.infoTextUp}>
          For booking please click{" "}
          <a className={styles.a} href="/booking">
            here
          </a>{" "}
          and <br></br>fill out the questionnaire on the booking page.
        </p>
        <p className={styles.h3}>
          <strong> OPEN HOURS:</strong>
        </p>
        <p className={styles.infoTextUp}>Monday - Friday</p>
        <p className={styles.infoTextUp}> 10:00 - 18:00</p>
        <p className={styles.h3}>
          <strong>CONTACT:</strong>
        </p>

        <div className={styles.socialIcons}>
          <a
            className={styles.socialIcon}
            href="https://www.instagram.com/hhey.photography/"
          >
            <InstagramOutlined />
          </a>

          <a
            className={styles.socialIcon}
            href="https://www.linkedin.com/company/hhey-photography-studio/"
          >
            <LinkedinOutlined />
          </a>

          <a
            className={styles.socialIcon}
            href="https://www.behance.net/elenasmolyuk/"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>

          <a className={styles.socialIcon} href="https://pin.it/72jZOCn/">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>

          <h3 className={styles.footerInfo}>
          <strong> All Images © Smoliuk Elena 2023</strong>
        </h3>
        </div>
        
      </div>
   
  );
};

export default InfoScreen;
