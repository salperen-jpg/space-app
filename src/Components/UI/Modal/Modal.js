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
          <div
            className='close-btn'
            onClick={() => props.setShowModal((prev) => !prev)}
          >
            {/* <i class='fa fa-times-circle fa-3x'></i> */}
            <span className='closing'>X</span>
          </div>
          <ul className='favShips'>
            {favShips.map((fav) => {
              return (
                <li key={fav.id}>
                  <div className='left-side'>
                    <img src={fav.links.flickr_images[0]} alt='' />
                    <p>{fav.mission_name}</p>
                  </div>
                  <div className='delete-icon'>
                    <i class='fa fa-trash fa-2x'></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
