import React from 'react';


const NoteInput = (props) => {
  return (
    <form onSubmit= {(event) => {props.handleSubmit(event)}}>
      <label htmlFor="note">Enter Note Here</label>
      <input onChange={(event) => props.handleChange(event)} name="note" id="notes" />
      <button type="submit">Submit Note</button>
    </form>
  );
}


export default NoteInput;


// class NoteInput extends Component {

//   constructor() {
//     super();
//     this.state = {
//       number: 5
//     }

//   }




//   render() {
//     return (
//       <div>
//         <label>Enter Note Here</label>
//         <input className="notes" />
//         <p>Our favorite number is {this.state.number}</p>
//       </div>
//     );
//   }
// }
