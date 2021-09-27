import React from 'react';
import Logo from './logo.svg';
import Fav from './fav.svg';
import './NavBar.css';

const NavBar = () => {
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
              />
              <button type='button' className='button'>
                <i className='fa fa-search '></i>
              </button>
            </div>
          </li>
          <li>
            <div className='fav'>
              <img src={Fav} alt='' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
