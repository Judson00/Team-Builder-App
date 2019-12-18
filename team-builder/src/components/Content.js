import React from 'react';

  const Users = props => {
    return(
    <div className = 'user-list'>
      {props.info.map(user => (
        <div className="user" key={user.id}>
          <h2>{user.username}</h2>
          <h3>{user.email}</h3>
          <h3>{user.role}</h3>
        </div>
      ))}
    </div>
  )
  }

export default Users;