import Link from "next/link";
import React, { useState } from "react";
import styles from "./HeaderMobile.module.css";
import {
  MenuOutlined,
  CloseOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPinterestP, faBehance } from "@fortawesome/free-brands-svg-icons";
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
        className={clsx(styles.overlay, menuOpen ? styles.open : "")}
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
          <Link href="/info" onClick={handleCloseClick}>
            INFO
          </Link>
          <Link href="/booking" onClick={handleCloseClick}>
            BOOKING
          </Link>
          <Link href="/faq" onClick={handleCloseClick}>
            FAQs
          </Link>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMobile;
