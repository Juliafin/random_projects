import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addEntry} from '../actionCreators';

const AddressLayout = (props) => {

  const [entry, setEntry] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    zip: '',
    state: ''
  })

  const updateEntry = (event) => {
    const {value, id} = event.target;
      setEntry({...entry, [id]: value})
  }

  return (
    <div>
      <h1>Address Page</h1>

      <label htmlFor="firstName">First Name</label>
      <input onChange={updateEntry} id="firstName" type="text"/>

      <label htmlFor="lastName">Last Name</label>
      <input onChange={updateEntry} id="lastName" type="text"/>

      <label htmlFor="street">Street</label>
      <input onChange={updateEntry} id="street" type="text"/>

      <label htmlFor="city">City</label>
      <input onChange={updateEntry} id="city" type="text"/>

      <label htmlFor="zip">Zip</label>
      <input onChange={updateEntry} id="zip" type="text"/>

      <label htmlFor="state">State</label>
      <input onChange={updateEntry} id="state" type="text"/>

      <button onClick={() => {
        const addressEntry = {
          firstName: entry.firstName,
          lastName: entry.lastName,
          address: {
            city: entry.city,
            state: entry.state,
            zip: entry.zip,
            street: entry.street
          }
        }

        props.dispatch(addEntry(addressEntry))

      }} >Add entry</button>

    </div>
  )
}

export default connect()(AddressLayout); 