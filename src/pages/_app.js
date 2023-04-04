import "@component/styles/globals.css";
import "antd/dist/reset.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "@component/components/Header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [clicked, setClicked] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scroll({
        top: 1,
        left: 0,
        behavior: "smooth",
      });
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);

  return (
    <Header setClicked={setClicked} clicked={clicked}>
      <Component {...pageProps} />
    </Header>
  );
}
