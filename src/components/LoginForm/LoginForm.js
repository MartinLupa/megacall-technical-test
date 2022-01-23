import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../App";
import "./LoginForm.css";

const formInitialState = { email: "", password: "" };

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(formInitialState);
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;
    setLoginForm({ ...loginForm, ...{ [inputName]: inputValue } });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ ...loginForm, isLogged: true });
    setLoginForm(formInitialState);
    navigate("/contacts");
  };

  return (
    <form onSubmit={handleLogin} className="login-form" action="">
      <p>Please use any email valid format + password to Log in</p>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        required="required"
        onChange={handleInputChange}
        placeholder="Insert your email"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        required="required"
        onChange={handleInputChange}
        placeholder="Insert your password"
      />

      <button className="btn-success" type="submit">
        Login
      </button>
    </form>
  );
};
