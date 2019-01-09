import React from 'react';


const AddressDisplay = (props) => (
  <div className="address_entry">
    <span>First Name: {props.firstName}</span>
    <span>Last Name: {props.lastName}</span>
    <p>Address: {props.address}</p>
    <p>City: {props.city}</p>
    <p>Zipcode: {props.zipCode}</p>
    <p>State: {props.state}</p>
    <p>Telephone Number: {props.telephoneNumber}</p>
  </div> 
);

export default AddressDisplay;