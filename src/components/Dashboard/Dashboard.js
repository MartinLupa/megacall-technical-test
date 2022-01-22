import React, { useState } from "react";
import { AddContactForm } from "../AddContactForm/AddContactForm";
import { ContactsList } from "../ContactsList/ContactsList";
import { EditUserForm } from "../EditUserForm/EditUserForm";
import "./Dashboard.css";

export const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: { title: "", first: "", last: "" },
    email: "",
  });

  const handleSearch = () => {};
  const handleQueryChange = () => {};
  console.log("CURRENT", currentUser);

  return (
    <div className="dashboard-container">
      <h1>Contacts List</h1>
      <form onSubmit={handleSearch} className="movie-search-form" action="">
        <div className="form-group">
          <label htmlFor="query"></label>
          <input
            id="query"
            type="text"
            className="form-text text-muted form-control"
            placeholder="Search movie.."
            onChange={handleQueryChange}
            value=""
          />
        </div>
      </form>
      <div className="center-container">
        {isEditing ? (
          <EditUserForm currentUser={currentUser} setIsEditing={setIsEditing} />
        ) : (
          <AddContactForm />
        )}

        <ContactsList
          setIsEditing={setIsEditing}
          setCurrentUser={setCurrentUser}
        />
      </div>
    </div>
  );
};
