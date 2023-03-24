import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./Info.module.css";

const InfoScreen = () => {
  return (
    <>
      <Header />
      <div className={styles.about}>
        Hello, my name is Lena, and I am a professional photographer originally
        from Ukraine. I recently relocated to Berlin to pursue my passion for
        photography. I have been working in this field for five years and have
        had the opportunity to work with top clients in the beauty industry, as
        you can see in my portfolio. Currently, I specialize in product
        photography, particularly for beauty brands. If you need a skilled
        product photographer, please feel free to contact me through the form,
        Instagram, or email. I would be happy to offer my professional
        experience and expertise.
      </div>
    </>
  );
};

export default InfoScreen;
