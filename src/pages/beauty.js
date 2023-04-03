import { useEffect } from "react";
import BeautyScreen from "../screens/Beauty/BeautyScreen";

const BeautyPage = ({ clicked, setClicked }) => {
  // useEffect(() => {
  //   setClicked(false);
  //   console.log("clicked from BeautyPage.js: ", clicked);
  // });
  return <BeautyScreen clicked={clicked} setClicked={setClicked} />;
};

export default BeautyPage;
