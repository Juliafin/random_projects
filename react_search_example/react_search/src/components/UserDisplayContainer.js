import React from 'react'
import UserDisplay from './UserDisplay';


const UserDisplayContainer = (props) => {
  let users = [];
  // console.log(props, 'props inside display container')
  if (props.users.length) {
    users = props.users.map((user, index) => {
      return (
        <UserDisplay 
        key={index}
        id={user.id}
        name={user.name}
        address={user.address}
        username={user.username}
        email={user.email}
        phone={user.phone}
        />
      )
    });

  }

  return (
    <div id="userContainer">
      <h2>Users: </h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Phone</td>
            <td>UserName</td>
            <td>Email</td>
          </tr>

        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    </div>
  );
};

export default UserDisplayContainer;