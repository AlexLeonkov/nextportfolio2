import "@component/styles/globals.css";
import "antd/dist/reset.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "@component/components/Header";
import { useState, useEffect } from "react";

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [clicked, setClicked] = useState(false);
  


  return (
    <Header setClicked={setClicked} clicked={clicked}>
      <Component {...pageProps} />
    </Header>
  );
}
