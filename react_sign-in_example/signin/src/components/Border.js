import React from 'react';
import './Border.css';
import { Modal, Button } from 'react-materialize';

const Border = (props) => {

  const button = (<Button>Open</Button>)

  const modal = (<Modal trigger={button} header="This is the header">Here is some text</Modal>)

  return (
    <div id="border" style={{border: '1px solid green', height: '100px', width: '100%'}}>
      {modal}
      {props.children}
    </div>
  )
}

export default Border