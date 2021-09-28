import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Ships from './Ships';
function App() {
  const [search, setSearch] = useState('');

  const onSearchChangeHandler = (searchInputValue) => {
    setSearch(searchInputValue);
    console.log(search);
  };

  return (
    <div className='container'>
      <NavBar onSearchChangeHandler={onSearchChangeHandler} />
      <Ships search={search} />
    </div>
  );
}

export default App;
