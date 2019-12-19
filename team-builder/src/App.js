import React, { useState } from 'react';

import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

const App = () => {

  const usersData = [
    { id: 1, name: 'Robert', email: 'robert.judson@outlook.com', role: 'Full-Stack Engineer' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com', role: 'Front-End Engineer' },
    { id: 3, name: 'John Doe', email: 'john.doe@gmail.com', role: 'Back-End Engineer' }
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', email: '', role: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, email: user.email, role: user.role  })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className='container'>
      <h1>Team Builder</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
          <div>
            <h2>Edit User</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
          ) : (
          <div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}

export default App;
