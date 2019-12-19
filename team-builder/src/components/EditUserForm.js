import React, { useState, useEffect } from 'react';

const EditUserForm = props => {

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return(
    <form
      onSubmit = {event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type='text' name='name' value={user.name} onChange={handleInputChange} />
      <label>Email</label>
      <input type='email' name='email' value={user.email} onChange={handleInputChange} />
      <label>Role</label>
      <input type='text' name='role' value={user.role} onChange={handleInputChange} />
      <button>Update User</button>
      <button onClick = {() => props.setEditing(false)} className='button muted-button'>
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;