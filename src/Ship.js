import React, { useState } from 'react';

const Ship = ({
  id,
  links,
  details,
  mission_name,
  launch_date_local,
  static_fire_date_utc,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <li>
        <div className='center'>
          <img src={links.flickr_images[0]} alt={mission_name} />
        </div>
        <p className='date-notation'>{static_fire_date_utc}</p>
        <p className='mission'>{mission_name}</p>
        <p className='detail'>
          {readMore ? details : `${details.substring(0, 200)}...`}
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
