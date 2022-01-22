import React, { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import "./EditUserForm.css";

export const EditUserForm = ({ currentUser, setIsEditing }) => {
  const { setContactList, contactList } = useContext(GlobalContext);

  const [title, setTitle] = useState(currentUser.name.title);
  const [first, setFirst] = useState(currentUser.name.first);
  const [last, setLast] = useState(currentUser.name.last);
  const [email, setEmail] = useState(currentUser.email);

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

  const updateContact = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const updatedContact = { name: { title, first, last }, email };
    setContactList(
      contactList.map((contact) =>
        contact.email === currentUser.email ? updatedContact : contact
      )
    );
    setTitle("");
    setFirst("");
    setLast("");
    setEmail("");
  };

  return (
    <form onSubmit={updateContact} className="add-contact-form" action="">
      <h2>Edit user</h2>
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

      <button type="submit">Edit User</button>
    </form>
  );
};
