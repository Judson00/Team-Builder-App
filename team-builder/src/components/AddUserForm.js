import React, { useState } from 'react';

const AddUserForm = props => {

  return(
    <form>
      <label>Name</label>
      <input type='text' name='name' value='' />
      <label>Email</label>
      <input type='text' name='email' value='' />
      <label>Role</label>
      <input type='text' name='role' value='' />
      <button>Add New Team Member</button> 
    </form>
  )
}

export default AddUserForm;