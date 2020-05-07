import React, {Component} from 'react';
import {Row, Input, Button} from 'react-materialize';
import axios from 'axios';
class Addressform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        firstName: '',
        lastName: '',
        zipCode: '',
        telephoneNumber: '',
        city: '',
        state: '',
        address: ''
      }
    };
    this.fieldChange = this.fieldChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

  }
  
  
  fieldChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, name);
    this.setState({
      inputs: Object.assign({}, this.state.inputs, {[name]: value})
    });
  }

  formSubmit(event) {
    event.preventDefault();
    axios.post('/api/addressEntries', this.state.inputs)
      .then((response) => {
        console.log(response);
        this.props.setFormSubmitted();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render () {
    return (
      <form onSubmit={this.formSubmit}>
        <Row>
          <Input onChange={this.fieldChange} placeholder="First name" name="firstName"></Input>
          <Input onChange={this.fieldChange} placeholder="last name" name="lastName"></Input>
        </Row>
        <Row>
          <Input onChange={this.fieldChange} placeholder="Address" name="address" label="Address" ></Input>
          <Input onChange={this.fieldChange} placeholder="Zipcode" name="zipCode" label="Zipcode" ></Input>
          <Input onChange={this.fieldChange} placeholder="City" name="city" label="City" ></Input>
          <Input onChange={this.fieldChange} placeholder="State" name="state" label="State" ></Input>
        </Row>
        <Row >
          <Input onChange={this.fieldChange} placeholder="Telephone Number" name="telephoneNumber" label="Telephone Number"></Input>
        </Row>
        <Button type="submit" waves="light">Submit entry</Button>
      </form>
    );
  }
}

export default Addressform;