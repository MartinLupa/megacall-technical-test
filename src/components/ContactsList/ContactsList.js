import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { Pagination } from "../Pagination/Pagination";
import "./ContactsList.css";

export const ContactsList = ({ setIsEditing, setCurrentContact }) => {
  const { contactList, setContactList } = useContext(GlobalContext);

  const deleteContact = (email) => {
    setContactList(contactList.filter((item) => item.email !== email));
  };
  const editContact = (contact) => {
    setIsEditing(true);
    setCurrentContact({
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
                  <ModeEditOutlineOutlinedIcon
                    className="edit-icon"
                    onClick={(e) => editContact(contact)}
                  />
                </td>
                <td>
                  <DeleteOutlineOutlinedIcon
                    className="delete-icon"
                    onClick={(e) => deleteContact(contact.email)}
                  />
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
