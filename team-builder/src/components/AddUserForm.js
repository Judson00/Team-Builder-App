import React, { useState } from 'react';

const AddUserForm = props => {

  const initialFormState = { id: null, name: '', email: '', role: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({...user, [name]: value})
  }

  return(
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.email || !user.role) return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Name</label>
      <input type='text' name='name' value={user.name} onChange={handleInputChange} />
      <label>Email</label>
      <input type='text' name='email' value={user.email} onChange={handleInputChange} />
      <label>Role</label>
      <input type='text' name='role' value={user.role} onChange={handleInputChange} />
      <button>Add New Team Member</button> 
    </form>
  )
}

export default AddUserForm;