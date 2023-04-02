import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Router from "next/router";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  function handleLogoClick() {
    window.location.reload(); // reloads the current page
  }

  return isMobile ? (
    <HeaderMobile />
  ) : (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <a className={styles.logo} href="/" onClick={handleLogoClick}>
          HHEY.PHOTOGRAPHY STUDIO
        </a>
      </div>
      <div className={styles.header_right}>
        <Link href="/beauty">BEAUTY</Link>
        <Link href="/food">FOOD</Link>
        <Link href="/info">BIO</Link>
        <Link href="/booking">BOOKING</Link>
        <Link href="/faq">FAQs</Link>
      </div>
    </div>
  );
}

export default Header;
