import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Ships from './Components/Ships/Ships';
import Modal from './Components/UI/Modal/Modal';
function App() {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const onSearchChangeHandler = (searchInputValue) => {
    setSearch(searchInputValue);
    console.log(search);
  };

  return (
    <div className='container'>
      <NavBar
        onSearchChangeHandler={onSearchChangeHandler}
        showModal={showModal}
        openModal={openModal}
        setShowModal={setShowModal}
      />
      <Ships search={search} />
      <Modal
        showModal={showModal}
        openModal={openModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
