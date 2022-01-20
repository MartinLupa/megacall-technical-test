import React from "react";
import { AddContactForm } from "../AddContactForm/AddContactForm";
import { ContactsList } from "../ContactsList/ContactsList";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Contacts List</h1>
      <div className="center-container">
        <ContactsList />
        <AddContactForm />
      </div>
    </div>
  );
};
