import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { Pagination } from "../Pagination/Pagination";
import "./ContactsList.css";

export const ContactsList = ({ setIsEditing, setCurrentUser }) => {
  const { contactList, setContactList } = useContext(GlobalContext);

  const deleteContact = (email) => {
    setContactList(contactList.filter((item) => item.email !== email));
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
          {contactList?.length > 0 ? (
            contactList?.map((contact) => (
              <tr key={contact.email} className="row">
                <td>
                  {`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
                </td>
                <td>{contact.email}</td>
                <td>
                  <button onClick={(e) => editContact(contact)}>Edit</button>
                </td>
                <td>
                  <button onClick={(e) => deleteContact(contact.email)}>
                    X
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No contacts.</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
