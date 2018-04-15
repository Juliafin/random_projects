import React from 'react';



const Calculation = ({num1, num2, operator, result}) => {

  return (
    <p className="calculations">{num1} {operator} {num2} = {result}</p>
  )
};

export default Calculation;