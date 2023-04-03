import { useState } from "react";

export const useClickState = () => {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    setClicked(true);
    console.log("triggeres, clicked open: ", clicked);
  }

  function closeHandler() {
    setClicked(false);
    console.log("triggeres, clicked: ", clicked);
  }

  return [clicked, clickHandler, closeHandler];
};
