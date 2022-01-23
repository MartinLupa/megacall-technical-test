import React, { useContext, useState } from "react";
import { GlobalContext } from "../../App";

export const AddContactForm = () => {
  const { setContactList } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleFirstInput = (e) => {
    setFirst(e.target.value);
  };
  const handleLastInput = (e) => {
    setLast(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const submitContact = (e) => {
    e.preventDefault();
    const newContact = { name: { title, first, last }, email };
    setContactList((prevList) => [newContact, ...prevList]);
    setTitle("");
    setFirst("");
    setLast("");
    setEmail("");
  };

  return (
    <form onSubmit={submitContact} className="add-edit-form" action="">
      <h2>Add user</h2>
      <label htmlFor="contact-title">Title:</label>
      <input id="title" onChange={handleTitleInput} value={title} type="text" />

      <label htmlFor="contact-first">First name:</label>
      <input id="first" onChange={handleFirstInput} value={first} type="text" />

      <label htmlFor="contact-last">Last name:</label>
      <input id="last" onChange={handleLastInput} value={last} type="text" />

      <label htmlFor="contact-email">Email:</label>
      <input
        id="email"
        onChange={handleEmailInput}
        value={email}
        type="email"
      />

      <button className="btn-success" type="submit">
        Add contact
      </button>
    </form>
  );
};
