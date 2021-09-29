import React from 'react';
import Logo from '../../utils/logo.svg';
import Fav from '../../utils/fav.svg';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className='header'>
      <div className='nav'>
        <ul>
          <li>
            <img
              src={Logo}
              alt=''
              style={{ width: '338px', height: '128px' }}
            />
          </li>
          <li>
            <div className='search-container'>
              <input
                type='text'
                name=''
                placeholder='SEARCH FOR SHIPS'
                className='input'
                onChange={(e) => {
                  props.onSearchChangeHandler(e.target.value);
                }}
              />
              <button type='button' className='button'>
                <i className='fa fa-search '></i>
              </button>
            </div>
          </li>
          <li>
            <div className='fav'>
              <img src={Fav} alt='' onClick={props.openModal} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
