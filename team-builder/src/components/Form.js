import React from 'react';
import { useState } from 'react';

const Form = () => {
  
  return (
    <div>
      <form id='name'>
        <label>
          Full Name:
          <input type='text'placeholder='e.g. John Doe' />
        </label>
      </form>
      <form id='email'>
        <label>
          Email: 
          <input type='text' placeholder='e.g. john.doe@gmail.com'/>
        </label>
      </form>
      <form id='role'>
        <label>
          Role:
          <input type='text' placeholder='e.g. Front-End Engineer'/>
        </label>
      </form>
    </div>
  )

}

export default Form;