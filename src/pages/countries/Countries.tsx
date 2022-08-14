import { DefaultContainer } from '../../components/default-container/DefaultContainer';
import { CountryBox } from './components/country-box/CountryBox';
import { RegionDropdown } from './components/region-dropdown/RegionDropdown';
import { SearchInput } from './components/search-input/SearchInput';
import { CountriesContainer, Wrapper } from './Countries.styles';
import { useGetCountriesQuery } from '../../redux/countries';

export const Countries = () => {
  // const { filteredCountries } = useContext(CountriesData);
  // const { countries } = filteredCountries;
  const { data, isLoading } = useGetCountriesQuery();

  return (
    <Wrapper>
      <DefaultContainer>
        <SearchInput placeholder="Search for a country..." />
        <RegionDropdown />
        <CountriesContainer>
          {isLoading ? (
            <h1>Loading</h1>
          ) : (
            data?.map((country, index) => {
              return <CountryBox key={index} {...country} />;
            })
          )}
        </CountriesContainer>
      </DefaultContainer>
    </Wrapper>
  );
};
