import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateRouter } from "./PrivateRouter";

export const PublicRouter = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <PrivateRouter />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
