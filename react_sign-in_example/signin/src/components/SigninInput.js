import React from 'react';



const SigninInput = (props) => {
  return (
    <form onSubmit={props.formSubmit}>
      <label htmlFor="username">Enter a userName</label>
      <input onChange={props.changeHandler} type="text" id="username"/>
      <label htmlFor="password">Enter a password</label>
      <input onChange={props.changeHandler} type="text" id="password"/>
      <button type="submit"> Submit </button>

    </form>
  )
}

export { SigninInput }