import React from 'react';
import './Ship/Ships.css';
import Loading from '../UI/Loading';
import Ship from './Ship/Ship';
import useFetchShips from '../Hooks/useFetchShips';

const Ships = ({ search }) => {
  const { ships, loading } = useFetchShips();

  const filteredShips = ships.slice(67, 73).filter((s) => {
    return s.mission_name.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <ul className='users'>
      {filteredShips.map((ship) => {
        return <Ship key={ship.id} ship={ship} {...ship} search={search} />;
      })}
    </ul>
  );
};

export default Ships;
