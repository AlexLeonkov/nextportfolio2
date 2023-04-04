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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Header setClicked={setClicked} clicked={clicked}>
      <Component {...pageProps} />
    </Header>
  );
}
