import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Router from "next/router";
import { useClickState } from "@component/Hooks/useClickState";

function Header({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, clickHandler, closeHandler] = useClickState(false);

  useEffect(() => {
    window.innerWidth <= 500 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return isMobile ? (
    <HeaderMobile >{children}</HeaderMobile>
  ) : (
    <>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <Link className={styles.logo} href="/" onClick={closeHandler}>
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
    </>
  );
}

export default Header;
