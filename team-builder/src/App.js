import React, { useState } from 'react';

import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';

const App = () => {

  const usersData = [
    { id: 1, name: 'Robert', email: 'robert.judson@outlook.com', role: 'Full-Stack Engineer' },
    { id: 2, name: 'Vinni', email: 'vinni.hoke@gmail.com', role: 'Team Lead' },
    { id: 3, name: 'Cameron', email: 'cam.hawley@gmail.com', role: 'Sprint Lead' }
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      <h1>Team Builder</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App;
