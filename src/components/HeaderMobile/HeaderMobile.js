import Link from "next/link";
import React, { useState } from "react";
import styles from "./HeaderMobile.module.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  function handleCloseClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <Link href="/">HHEY.PHOTOGRAPHY STUDIO</Link>

        {!menuOpen && (
          <MenuOutlined
            className={styles.menuButton}
            onClick={handleMenuToggle}
          />
        )}
      </header>

      <div
        id="myNav"
        className={`${styles.overlay} ${menuOpen ? styles.open : ""}`}
      >
        <CloseOutlined
          className={styles.menuButton}
          onClick={handleMenuToggle}
          style={{
            color: "white",
          }}
        />
        <div className={styles.overlayContent}>
          <Link href="/beauty" onClick={handleCloseClick}>
            BEAUTY
          </Link>
          <Link href="/food" onClick={handleCloseClick}>
            FOOD
          </Link>
          <Link href="/info" onClick={handleCloseClick}>
            BIO
          </Link>
          <Link href="/booking" onClick={handleCloseClick}>
            BOOKING
          </Link>
          <Link href="/faq" onClick={handleCloseClick}>
            FAQs
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeaderMobile;
