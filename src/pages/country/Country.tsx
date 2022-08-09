import { useLocation } from 'react-router-dom';
import { ICountryData } from '../../providers/CountriesDataProvider';
import { CountryBorders } from './components/country-borders/CountryBorders';
import { CountryData } from './components/country-data/CountryData';
import { Wrapper, Flag } from './Country.styles';

export const Country = () => {
  const { state } = useLocation();
  const { flags } = state as ICountryData;

  return (
    <Wrapper>
      <Flag src={flags.png} />
      <CountryData data={state as ICountryData} />
      <CountryBorders data={state as ICountryData} />
    </Wrapper>
  );
};
