import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { PublicRouter } from "./routers/PublicRouter";

export const GlobalContext = createContext();

export const App = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isLogged: false,
  });
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&inc=name,email")
      .then((response) => response.json())
      .then((data) => setContactList(data.results));
  }, []);

  return (
    <div className="app-container">
      <GlobalContext.Provider
        value={{ user, setUser, contactList, setContactList }}
      >
        <PublicRouter />
      </GlobalContext.Provider>
    </div>
  );
};
