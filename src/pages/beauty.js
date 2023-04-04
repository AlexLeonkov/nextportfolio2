import { useEffect } from "react";
import BeautyScreen from "../screens/Beauty/BeautyScreen";
import { useRouter } from "next/router";

const BeautyPage = ({ clicked, setClicked }) => {

  

  return <BeautyScreen clicked={clicked} setClicked={setClicked} />;
};

export default BeautyPage;
