import { useLocation } from 'react-router-dom';
import { DefaultContainer } from '../../components/default-container/DefaultContainer';
import { ICountryData } from '../../redux/countriesApiSlice';
import { BackButton } from './components/back-button/BackButton';
import { CountryBorders } from './components/country-borders/CountryBorders';
import { CountryData } from './components/country-data/CountryData';
import { Wrapper, Flag, CountryDataContainer, CountryContainer } from './Country.styles';

export const Country = () => {
  const { state } = useLocation();
  const { flags } = state as ICountryData;

  return (
    <Wrapper>
      <DefaultContainer>
        <BackButton />
        <CountryContainer>
          <Flag src={flags.svg} />
          <CountryDataContainer>
            <CountryData data={state as ICountryData} />
            <CountryBorders data={state as ICountryData} />
          </CountryDataContainer>
        </CountryContainer>
      </DefaultContainer>
    </Wrapper>
  );
};
