import React, { useState } from 'react';

const Form = props => {

  const [user, setUser] = useState({ 
    username: '', 
    email: '', 
    role: '' 
  });

  const handleChange = event => {
    setUser({ 
      ...user, 
      [event.target.name]: event.target.value 
    });
    console.log(event.target.name);
  }

  const submitHandler = event => {
    console.log('user.name');
    console.log('user.email');
    console.log('user.role');
    event.preventDefault();
    props.addNewInfo(user);
    setUser({ username: '', email: '', role: '' })
    
  };

  return (
      <form onSubmit={submitHandler}>
        <label>
          Full Name:
          <input 
            type='text'
            placeholder='e.g. John Doe' 
            name='username'
            value={user.username}
            onChange={handleChange} 
          />
        </label><br />
        <label>
          Email: 
          <input 
            type='text' 
            placeholder='e.g. john.doe@gmail.com' 
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Role:
          <input 
            type='text' 
            placeholder='e.g. Front-End Engineer' 
            name='role'
            value={user.role}
            onChange={handleChange} 
          />
        </label><br />
        <button type='submit'>Add Team Member</button>
      </form>
  )

}

export default Form;