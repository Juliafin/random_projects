import React from 'react';


const GroceryList = (props) => {
  
  const foodItems = props.groceries.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <li >{item}</li>
        <button onClick={props.deleteGroceryClick} index={index} id="delete">Delete</button>
      </React.Fragment>
    );
  });
  
  return (
    <ul>{!foodItems.length ? <p>No Items added yet</p>: foodItems}</ul>
  );
};

export default GroceryList;