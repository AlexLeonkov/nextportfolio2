import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return isMobile ? (
    <HeaderMobile />
  ) : (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link className={styles.logo} href="/">
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
  );
}

export default Header;
