import React, { useState, useEffect } from 'react';
import {
  API_CONTACTS,
} from '../model/constant';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetch(API_CONTACTS)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const handleEdit = (contact) => {
    setEditingContact(contact[0]);
  };

  const handleSave = (contact) => {
    fetch(`${API_CONTACTS}/${contact[0]}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: contact[1], phoneNumber: contact[2] }),
    })
    .then((response) => {
      if (response.ok) {
        setEditingContact(null);
      } else {
        console.log("Error");
      }
    });
  };

  const handleDelete = (contact) => {
    fetch(`${API_CONTACTS}/${contact[0]}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Delete request was not ok');
      }
      return fetch(API_CONTACTS);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => setContacts(data))
    .catch((error) => console.error('Delete error:', error));
  };

  // const handleCancel = () => {
  //   setEditingContact(null);
  // };
  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="left-align">Name</th>
              <th className="right-align">Phone Number</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts ? (
              contacts.map((contact, index) => (
                <tr key={index}>
                  <td className="left-align">
                    {editingContact === contact[0] ? (
                      <input
                        type="text"
                        value={contact[1]}
                        onChange={(e) => {
                          const updatedContacts = [...contacts];
                          updatedContacts[index][1] = e.target.value;
                          setContacts(updatedContacts);
                        }}
                      />
                    ) : (
                      contact[1]
                    )}
                  </td>
                  <td className="right-align">
                    {editingContact === contact[0] ? (
                      <input
                        type="number"
                        value={contact[2]}
                        onChange={(e) => {
                          const updatedContacts = [...contacts];
                          updatedContacts[index][2] = e.target.value;
                          setContacts(updatedContacts);
                        }}
                      />
                    ) : (
                      contact[2]
                    )}
                  </td>
                  <td className="actions">
                    {editingContact === contact[0] ? (
                      <div>
                        <button onClick={() => handleSave(contact)}>Save</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => handleEdit(contact)}>Edit</button>
                        <button onClick={() => handleDelete(contact)}>Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No contacts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;