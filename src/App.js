import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const updateDataInTable = (newData) => {
    setData(newData);
  };

  const addData = (formData) => {
    setData([...data, formData]);
    console.log('Current Data State:', data);
  };

  const deleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="app">
      {error && <p className="error">{error}</p>}
      <Form addData={addData} setError={setError} />
      <Table data={data} deleteRow={deleteRow} setError={setError}  updateDataInTable={updateDataInTable} />
    </div>
  );
};

export default App;
