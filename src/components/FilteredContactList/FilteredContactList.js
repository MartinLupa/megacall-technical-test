import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./FilteredContactList.css";

export const FilteredContactList = ({
  setIsEditing,
  setCurrentUser,
  filteredList,
  setFilteredList,
}) => {
  const { contactList, setContactList } = useContext(GlobalContext);

  const deleteContact = (email) => {
    setContactList(contactList.filter((item) => item.email !== email));
    setFilteredList([]);
  };
  const editContact = (contact) => {
    setIsEditing(true);
    setCurrentUser({
      name: {
        title: contact.name.title,
        first: contact.name.first,
        last: contact.name.last,
      },
      email: contact.email,
    });
    setFilteredList([]);
  };

  return (
    <div className="contacts-list">
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredList?.map((contact) => (
            <tr key={contact.email} className="row">
              <td>
                {`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
              </td>
              <td>{contact.email}</td>
              <td>
                <button onClick={(e) => editContact(contact)}>Edit</button>
              </td>
              <td>
                <button onClick={(e) => deleteContact(contact.email)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
