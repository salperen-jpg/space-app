import React, { useState } from 'react';
import ShipDate from './ShipDate';
import { useDispatch } from 'react-redux'; //imports dispatch
import { FavouritesActions } from '../../../Store/FavouritesSlice';
import { useSelector } from 'react-redux';

const Ship = (props) => {
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);

  const addToFavs = () => {
    dispatch(FavouritesActions.addFavourite({ ship: props.ship }));
  };

  const favs = useSelector((state) => state.favs.favourites);

  const userHasFavs = favs.find((fav) => fav.id === props.ship.id);

  return (
    <li>
      <div className='overlay'></div>
      <div className='center'>
        <img src={props.links.flickr_images[0]} alt={props.mission_name} />
      </div>
      {/* <p className='date-notation'>{props.static_fire_date_utc}</p> */}
      <div className='button-fav'>
        <ShipDate date={props.static_fire_date_utc} />
        <span onClick={addToFavs}>
          <i
            style={{ color: userHasFavs ? 'red' : 'white' }}
            className='fa fa-heart'
          ></i>
        </span>
      </div>
      <p className='mission'>{props.mission_name}</p>
      <p className='detail'>
        {readMore ? props.details : `${props.details.substring(0, 200)}...`}
      </p>
      <div className='execute_read'>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </li>
  );
};

export default Ship;
