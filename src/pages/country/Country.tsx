import { useLocation } from 'react-router-dom';
import { ICountryData } from '../../providers/CountriesDataProvider';

export const Country = () => {
  const { state } = useLocation();
  const { borders } = state as ICountryData;

  return (
    <div>
      <div>{borders[0]}</div>
    </div>
  );
};
