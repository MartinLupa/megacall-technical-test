import React, { useContext, useState } from "react";
import { GlobalContext } from "../../App";
import { AddContactForm } from "../AddContactForm/AddContactForm";
import { ContactsList } from "../ContactsList/ContactsList";
import { EditUserForm } from "../EditUserForm/EditUserForm";
import { FilteredContactList } from "../FilteredContactList/FilteredContactList";
import "./Dashboard.css";

export const Dashboard = () => {
  const { contactList } = useContext(GlobalContext);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: { title: "", first: "", last: "" },
    email: "",
  });

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setFilteredList([]);
    }
    if (searchQuery) {
      setFilteredList(
        contactList.filter((contact) =>
          contact.name.first.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    setSearchQuery("");
  };

  return (
    <div className="dashboard-container">
      <h1>Contacts List</h1>
      <form onSubmit={handleSearch} className="movie-search-form" action="">
        <div>
          <label htmlFor="query"></label>
          <input
            className="search-input"
            id="query"
            type="text"
            placeholder="Search contact by name"
            onChange={handleQueryChange}
            value={searchQuery}
          />
        </div>
      </form>
      <div className="center-container">
        {isEditing ? (
          <EditUserForm currentUser={currentUser} setIsEditing={setIsEditing} />
        ) : (
          <AddContactForm />
        )}

        {filteredList.length > 0 ? (
          <FilteredContactList
            setIsEditing={setIsEditing}
            setCurrentUser={setCurrentUser}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
        ) : (
          <ContactsList
            setIsEditing={setIsEditing}
            setCurrentUser={setCurrentUser}
          />
        )}
      </div>
    </div>
  );
};
