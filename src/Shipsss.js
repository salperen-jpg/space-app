import Ship from './Ship';
const Shipsss = ({ ships }) => {
  return (
    <>
      <ul className='users'>
        {ships.slice(67, 73).map((ship) => {
          // const {
          //   id,
          //   details,
          //   mission_name,
          //   launch_date_local,
          //   static_fire_date_utc,
          // } = ship;
          return (
            <Ship key={ship.id} {...ship} />
            // <li key={id} {...ship}>
            //   <div className='center'>
            //     <img
            //       src={ship.links.flickr_images[0]}
            //       alt={ship.mission_name}
            //     />
            //   </div>
            //   <p className='date-notation'>{static_fire_date_utc}</p>
            //   <p className='mission'>{mission_name}</p>
            //   <p className='detail'>{details.substring(0, 220)}</p>
            // </li>
          );
        })}
      </ul>
    </>
  );
};

export default Shipsss;