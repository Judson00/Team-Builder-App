import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleUserNameChange = event => {
    setUserName(event.target.value);
  }
  const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handleRoleChange = event => {
    setRole(event.target.value);
  }

  const submitHandler = event => {
    console.log('userName');
    console.log('email');
    console.log('role');
    event.preventDefault();
  };

  return (

    <div>
      {console.log({ userName })}
      {console.log({ email })}
      {console.log({ role })}
      <form onSubmit={event => submitHandler(event)}>
        <label>
          Full Name:
          <input type='text'placeholder='e.g. John Doe' onChange={event => handleUserNameChange(event)} />
        </label>
        <label>
          Email: 
          <input type='text' placeholder='e.g. john.doe@gmail.com' onChange={event => handleEmailChange(event)}/>
        </label>
        <label>
          Role:
          <input type='text' placeholder='e.g. Front-End Engineer' onChange={event => handleRoleChange(event)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )

}

export default Form;