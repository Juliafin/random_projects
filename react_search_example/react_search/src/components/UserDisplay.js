import React from 'react';


const UserDisplay = (props) => {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.address.street} {props.address.zipcode} {props.address.city} </td>
        <td>{props.phone}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
      </tr>
    )
}

export default UserDisplay;