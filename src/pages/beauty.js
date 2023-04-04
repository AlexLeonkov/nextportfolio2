import { useEffect } from "react";
import BeautyScreen from "../screens/Beauty/BeautyScreen";

const BeautyPage = ({ clicked, setClicked }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return <BeautyScreen clicked={clicked} setClicked={setClicked} />;
};

export default BeautyPage;
