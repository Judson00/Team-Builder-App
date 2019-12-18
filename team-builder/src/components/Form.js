import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [user, setUser] = useState({ name: '', email: '', role: '' });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const submitHandler = event => {
    console.log('user.name');
    console.log('user.email');
    console.log('user.role');
    setUser({ name: '', email: '', role: '' })
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
            name='username'
            value={user.name}
            onChange={event => handleChange(event)} 
          />
        </label>
        <label>
          Email: 
          <input 
            type='text' 
            placeholder='e.g. john.doe@gmail.com' 
            name='email'
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input 
            type='text' 
            placeholder='e.g. Front-End Engineer' 
            name='role'
            value={user.role}
            onChange={event => handleChange(event)} 
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )

}

export default Form;