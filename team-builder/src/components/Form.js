import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [user, setUser] = useState({ username: '', email: '', role: '' });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const submitHandler = event => {
    console.log('user.name');
    console.log('user.email');
    console.log('user.role');
    setUser({ username: '', email: '', role: '' })
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
            value={user.username}
            onChange={event => handleChange(event)} 
          />
        </label><br />
        <label>
          Email: 
          <input 
            type='text' 
            placeholder='e.g. john.doe@gmail.com' 
            name='email'
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label><br />
        <label>
          Role:
          <input 
            type='text' 
            placeholder='e.g. Front-End Engineer' 
            name='role'
            value={user.role}
            onChange={event => handleChange(event)} 
          />
        </label><br />
        <button>Submit</button>
      </form>
      <p>{user.username} {user.email} {user.role}</p>
    </div>
  )

}

export default Form;