import { DefaultContainer } from '../../components/default-container/DefaultContainer';
import { CountryBox } from './components/country-box/CountryBox';
import { RegionDropdown } from './components/region-dropdown/RegionDropdown';
import { SearchInput } from './components/search-input/SearchInput';
import { CountriesContainer, Wrapper } from './Countries.styles';
import { useGetCountriesQuery } from '../../redux/countriesApiSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCountries } from '../../redux/filteredCountriesSlice';
import { useEffect } from 'react';

export const Countries = () => {
  const { data, isLoading } = useGetCountriesQuery();
  const dispatch = useAppDispatch();
  const filteredCountriesData = useAppSelector(({ filteredCountries }) => filteredCountries);

  const { countries, region, searchedCountry } = filteredCountriesData;

  useEffect(() => {
    if (data) {
      const filteredCountries = data.filter((country) => {
        const countryName = country.name.common.toLowerCase();

        if (region === 'Filter by Region') {
          return countryName.includes(searchedCountry);
        }

        return countryName.includes(searchedCountry) && country.region === region;
      });

      dispatch(setCountries(filteredCountries));
    }
  }, [data, dispatch, region, searchedCountry]);

  return (
    <Wrapper>
      <DefaultContainer>
        <SearchInput placeholder="Search for a country..." />
        <RegionDropdown />
        <CountriesContainer>
          {isLoading ? (
            <h1>Loading</h1>
          ) : (
            countries.map((country, index) => {
              return <CountryBox key={index} {...country} />;
            })
          )}
        </CountriesContainer>
      </DefaultContainer>
    </Wrapper>
  );
};
