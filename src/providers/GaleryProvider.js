import React, { createContext, useContext, useState } from "react";

const GaleryContext = createContext({
  isOneImageMode: false,
});

export const GaleryProvider = ({ children }) => {
  const [isOneImageMode, setIsOneImageMode] = useState(false);

  return (
    <GaleryContext.Provider
      value={{
        isOneImageMode,
        setIsOneImageMode,
      }}
    >
      {children}
    </GaleryContext.Provider>
  );
};

export const useGalery = () => {
  const context = useContext(GaleryContext);

  if (context === undefined) {
    throw new Error("useGalery must be used within a GaleryProvider");
  }
  return context;
};
