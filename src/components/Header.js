import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Router, { useRouter } from "next/router";

import Head from "next/head";
import { useGalery } from "@component/providers/GaleryProvider";

function Header({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const { isOneImageMode, setIsOneImageMode } = useGalery();
  function handleReload() {
    closeHandler();
  }

  useEffect(() => {
    window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return isMobile ? (
    <HeaderMobile />
  ) : (
    <div>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <Link
            onClick={() =>setIsOneImageMode(false)}
            className={styles.logo}
            href="/"
          >
            HHEY.PHOTOGRAPHY STUDIO
          </Link>
        </div>
        <div className={styles.header_right}>
          <Link href="/beauty">BEAUTY</Link>
          <Link href="/food">FOOD</Link>
          <Link href="/info">BIO</Link>
          <Link href="/booking">BOOKING</Link>
          <Link href="/faq">FAQs</Link>
        </div>
      </div>

      {children}
    </div>
  );
}

export default Header;
