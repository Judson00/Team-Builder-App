import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [user, setUser] = useState({ name: '', email: '', role: '' });

  const handleUserNameChange = event => {
    setUser({ ...user, name: event.target.value });
  }
  const handleEmailChange = event => {
    setUser({ ...user, email: event.target.value });
  }
  const handleRoleChange = event => {
    setUser({ ...user, role: event.target.value });
  }

  const submitHandler = event => {
    console.log('user.name');
    console.log('user.email');
    console.log('user.role');
    event.preventDefault();
  };

  return (

    <div>
      {console.log(user)}
      <form onSubmit={event => submitHandler(event)}>
        <label>
          Full Name:
          <input 
            type='text'
            placeholder='e.g. John Doe' 
            onChange={event => handleUserNameChange(event)} 
          />
        </label>
        <label>
          Email: 
          <input type='text' 
            placeholder='e.g. john.doe@gmail.com' 
            onChange={event => handleEmailChange(event)}
          />
        </label>
        <label>
          Role:
          <input 
            type='text' 
            placeholder='e.g. Front-End Engineer' 
            onChange={event => handleRoleChange(event)} 
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )

}

export default Form;