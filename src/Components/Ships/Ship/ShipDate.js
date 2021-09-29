import React from 'react';

const ShipDate = (props) => {
  const newDate = new Date(props.date);
  const month = newDate.toLocaleString('en-US', { month: '2-digit' });
  const day = newDate.toLocaleString('en-US', { day: '2-digit' });
  const year = newDate.getFullYear();

  return <p className='date-notation'>{`${day}/${month}/${year}`}</p>;
};

export default ShipDate;
