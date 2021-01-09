import React from 'react';


export const Dashboard = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h1>Dashboard</h1>
  <p>Welcome {props.match.params.userId}</p>
    </div>
  )
}