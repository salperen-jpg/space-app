import React, { useState, useEffect } from 'react';
import './Ships.css';
import Loading from './Loading';

import Shipsss from './Shipsss';

const url = 'https://api.spacex.land/rest/launches/';

const Ships = ({ search }) => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const ships = await res.json();
      console.log(ships);
      setShips(ships);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <Shipsss ships={ships} search={search} />
      {/* <ul className='users'>
        {ships.slice(67, 73).map((ship) => {
          const {
            id,
            details,
            mission_name,
            launch_date_local,
            static_fire_date_utc,
          } = ship;
          return (
            <li key={id}>
              <div className='center'>
                <img
                  src={ship.links.flickr_images[0]}
                  alt={ship.mission_name}
                />
              </div>
              <p className='date-notation'>{static_fire_date_utc}</p>
              <p className='mission'>{mission_name}</p>
              <p className='detail'>{details.substring(0, 220)}</p>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default Ships;
