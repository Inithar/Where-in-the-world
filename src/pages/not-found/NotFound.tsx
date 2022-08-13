import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('countries');
  }, [navigate]);

  return <div>NotFound</div>;
};
