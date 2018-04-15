import React from 'react';
import './Dogoptions.css';



const Dogoptions = (props) => {
  console.log(props.number, 'props.number');

  const dogs = props.dogs.map((dog, index) => {
  return (<option key={index} value={dog} >{dog}</option>) 
})

console.log('color', props.color);
console.log('selectedDOG', props.selectedDog);
  

return (

    <div className="dogoptions">
    <p className={props.color} >{props.greeting}</p>
    <select name="currentDog" onChange={props.selectedDog}>
    <option default>Select a dog:</option>
    {dogs}
    </select>
    </div>

  );



}
export default Dogoptions;