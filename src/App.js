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
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?page=${currentPage}1&results=10&inc=name,email&seed=abc`
    )
      .then((response) => response.json())
      .then((data) => setContactList(data.results));
  }, [currentPage]);

  return (
    <div className="app-container">
      <GlobalContext.Provider
        value={{
          user,
          setUser,
          contactList,
          setContactList,
          currentPage,
          setCurrentPage,
        }}
      >
        <PublicRouter />
      </GlobalContext.Provider>
    </div>
  );
};
