import React, { useState } from 'react';

const Table = ({ data, deleteRow, setError, updateDataInTable }) => {
  console.log('Data in Table Component:', data);
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedData(data[index]);
  };

  const handleDelete = (index) => {
    deleteRow(index);
    setEditIndex(null);
  };

  const handleModalClose = () => {
    setEditIndex(null);
    setEditedData(null);
  };

  const handleModalSubmit = () => {
    console.log('Submitting edited data:', editedData);
    const newData = [...data];
    newData[editIndex] = { ...editedData };

    console.log('New data after edit:', newData);
    setEditIndex(null);
    setEditedData(null);
    console.log('Data after closing modal:', newData);
    updateDataInTable(newData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Weekdays</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.contact}</td>
            <td>{row.weekdays}</td>
            <td>{row.gender}</td>
            <td>{row.dob.toLocaleDateString()}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      {editIndex !== null && (
        <div className="modal">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={editedData.email}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
            />
          </div>
          <div>
            <label>Contact</label>
            <input
              type="contact"
              name="contact"
              value={editedData.contact}
              onChange={(e) => setEditedData({ ...editedData, contact: e.target.value })}
            />
          </div>
          <div>
            <label>Weekdays</label>
            <input
              type="weekdays"
              name="weekdays"
              value={editedData.weekdays}
              onChange={(e) => setEditedData({ ...editedData, weekdays: e.target.value })}
            />
          </div>
          <div>
            <label>Gender</label>
            <input
              type="gender"
              name="gender"
              value={editedData.gender}
              onChange={(e) => setEditedData({ ...editedData, gender: e.target.value })}
            />
          </div>
          <div>
            <label>DOB</label>
            <input
              type="dob"
              name="dob"
              value={editedData.dob.toLocaleDateString()}
              onChange={(e) => setEditedData({ ...editedData, dob: e.target.value })}
            />
          </div>
          <button onClick={handleModalSubmit}>Save</button>
          <button onClick={handleModalClose}>Cancel</button>
        </div>
      )}
    </table>
  );
};

export default Table;
