import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./Info.module.css";

const InfoScreen = () => {
  return (
    <>
      <div className={styles.about}>
        Lena, originally from Ukraine but now based in Berlin, Germany, is a
        professional product photographer, art director, and photo stylist. Her
        extensive experience in food and reportage photography, including
        working for Michelin restaurants, has honed her eye for detail and
        ability to capture the essence of a subject. Presently, Lena specializes
        in product photography for beauty brands and is constantly seeking
        inspiration to create exceptional images. With her commitment to her
        craft and wealth of experience, Lena is a strong contender for success
        in product photography for beauty brands. Her skills and passion have
        the potential to produce stunning images that highlight the beauty and
        distinctiveness of the products she photographs.
      </div>
    </>
  );
};

export default InfoScreen;
