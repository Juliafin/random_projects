import React from 'react';


const Search = (props) => {
  return (
    <div id="search_container">
      <h2>Search Users below: </h2>
      <form>
        <input onChange={props.searchHandler} type="text"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;