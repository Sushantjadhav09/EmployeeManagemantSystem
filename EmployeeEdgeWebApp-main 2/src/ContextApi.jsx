import React, { createContext, useState } from "react";

const context = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userType: "",
    userId: "",
  });

  return (
    <context.Provider value={{ userData, setUserData }}>
      {children}
    </context.Provider>
  );
};

export { context, UserContextProvider };
