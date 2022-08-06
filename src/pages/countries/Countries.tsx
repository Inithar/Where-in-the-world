import React, { useContext } from 'react';
import { CountriesData } from '../../providers/CountriesDataProvider';
import { CountryBox } from './components/country-box/CountryBox';
import { SearchInput } from './components/search-input/SearchInput';
import { Wrapper } from './Countries.styles';

export const Countries = () => {
  const { chosenCountriesData } = useContext(CountriesData);

  return (
    <Wrapper>
      <SearchInput placeholder="Search for a country..." />
      {chosenCountriesData.map((country, index) => {
        return <CountryBox key={index} {...country} />;
      })}
    </Wrapper>
  );
};
