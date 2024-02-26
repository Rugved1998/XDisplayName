import React, { useState } from 'react';

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [display, setDisplay] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
   
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
   
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} required/>
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} required />
        </label>
        <br />
        <button type="submit" >
          Submit
        </button>
      </form>
      <br></br>
      <label>
         {display ? `Full Name: ${fullName}`:" "}
      </label>
    </div>
  );
};

export default FullNameDisplay;