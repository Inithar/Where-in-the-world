import React, { useContext } from 'react';
import { DefaultContainer } from '../../components/default-container/DefaultContainer';
import { CountriesData } from '../../providers/CountriesDataProvider';
import { CountryBox } from './components/country-box/CountryBox';
import { RegionDropdown } from './components/region-dropdown/RegionDropdown';
import { SearchInput } from './components/search-input/SearchInput';
import { CountriesContainer, Wrapper } from './Countries.styles';

export const Countries = () => {
  const { filteredCountries } = useContext(CountriesData);
  const { countries } = filteredCountries;
  return (
    <Wrapper>
      <DefaultContainer>
        <SearchInput placeholder="Search for a country..." />
        <RegionDropdown />
        <CountriesContainer>
          {countries.map((country, index) => {
            return <CountryBox key={index} {...country} />;
          })}
        </CountriesContainer>
      </DefaultContainer>
    </Wrapper>
  );
};
