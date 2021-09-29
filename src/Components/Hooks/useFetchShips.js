import { useEffect, useState } from 'react';

const useFetchShips = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const call = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.spacex.land/rest/launches/');
      const ships = await res.json();
      setShips(ships);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Something went wrong');
    }
  };

  useEffect(() => {
    call();
  }, []);

  return {
    ships,
    loading,
    error,
  };
};

export default useFetchShips;
