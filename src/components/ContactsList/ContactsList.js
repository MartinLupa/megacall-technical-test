import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../App";
import "./ContactsList.css";

export const ContactsList = () => {
  const { contactList, setContactList } = useContext(GlobalContext);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setContactList(data.results));
  }, []);

  const deleteContact = (email) => {
    setContactList(contactList.filter((item) => item.email !== email));
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
          {contactList?.map((contact) => (
            <tr key={contact.email} className="row">
              <td>
                {`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
              </td>
              <td>{contact.email}</td>
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
