import React from 'react';
import './Modal.css';
import useFetchShips from '../../Hooks/useFetchShips';
import { useSelector } from 'react-redux';

const Modal = (props) => {
  const favShips = useSelector((state) => state.favs.favourites);

  return (
    <>
      {props.showModal ? (
        <div className='modal-wrapper'>
          <h1>This is my Modal</h1>
          {favShips.map((fav) => {
            return (
              <div key={fav.id}>
                <img src={fav.links.flickr_images[0]} alt='' />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default Modal;
