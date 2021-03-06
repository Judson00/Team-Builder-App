import React from 'react';

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <button 
            onClick = {() => {
              props.editRow(user)
            }}
          className='button muted-button'>Edit</button>
          <button onClick={() => {
            props.deleteUser(user.id)
          }} 
          className='button muted-button'>Delete</button>
        </td>
      </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;