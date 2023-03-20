import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
function Header() {
  return (
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
