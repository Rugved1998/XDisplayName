import React, { useState } from 'react';


export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [display, setDisplay] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setDisplay(false); // Reset display when changing input
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setDisplay(false); // Reset display when changing input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setDisplay(true);
      setFullName(`${firstName} ${lastName}`);
    } else {
      setDisplay(false);
      setFullName('');
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} required />
        </label>
       <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br/>
      </form>
      {display && (
        <label>
          Full Name: {fullName}
        </label>
      )}
    </div>
  );
};

