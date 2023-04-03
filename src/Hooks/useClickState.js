import { useState } from "react";

export const useClickState = () => {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    setClicked(true);
    console.log("triggeres, clicked open: ", clicked);
  }

  function closeHandler() {
    console.log("triggeres, clicked close: ", clicked);
    setClicked(false);
  }

  return [clicked, clickHandler, closeHandler];
};
