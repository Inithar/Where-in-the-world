import React, { useContext } from 'react';
import { DefaultContainer } from '../../components/default-container/DefaultContainer';
import { CountriesData } from '../../providers/CountriesDataProvider';
import { CountryBox } from './components/country-box/CountryBox';
import { SearchInput } from './components/search-input/SearchInput';
import { CountriesContainer, Wrapper } from './Countries.styles';

export const Countries = () => {
  const { filteredCountriesData } = useContext(CountriesData);

  return (
    <Wrapper>
      <DefaultContainer>
        <SearchInput placeholder="Search for a country..." />
        <CountriesContainer>
          {filteredCountriesData.map((country, index) => {
            return <CountryBox key={index} {...country} />;
          })}
        </CountriesContainer>
      </DefaultContainer>
    </Wrapper>
  );
};
