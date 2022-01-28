import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import React, { useContext } from "react";
import { GlobalContext } from "../../App";

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
          ))}
        </tbody>
      </table>
    </div>
  );
};
