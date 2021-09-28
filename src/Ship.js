import React, { useState } from 'react';

const Ship = (props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <li>
        <div className='center'>
          <img src={props.links.flickr_images[0]} alt={props.mission_name} />
        </div>
        <p className='date-notation'>{props.static_fire_date_utc}</p>
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
    </>
  );
};

export default Ship;
