import React, { useState } from 'react';
import {
  API_CONTACTS,
} from '../model/constant';

const EditContacts = () => {
  const [newContact, setNewContact] = useState({ name: '', phoneNumber: '' });

  const handleAddContact = () => {
    fetch(API_CONTACTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = '/';
        } else {
          // Handle errors
        }
      });
  };


  return (
    <div className="edit-contacts">
      <h3>Add New Contact</h3>
      <input
        type="text"
        placeholder="Name"
        value={newContact.name}
        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={newContact.phoneNumber}
        onChange={(e) => setNewContact({ ...newContact, phoneNumber: e.target.value })
      }
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default EditContacts;