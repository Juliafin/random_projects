import React from 'react';
import {connect} from 'react-redux';

const AddressBook = (props) => {

  const addressEntries = props.entries.length ? props.entries.map((entry) => {
    return (
      <div>
        <p>Name: {entry.firstName} {entry.lastName}</p>
        <p>Address: {entry.address.street} {entry.address.city}, {entry.address.zip} {entry.address.state}</p>
      </div>
    )
  }) : (
    <div>No entries added yet</div>
  )

  return (
    <div>{addressEntries}</div>
  )

}


const mapStateToProps = (state) => {
  return {
    entries: state.entries
  }
}


export default connect(mapStateToProps)(AddressBook);


