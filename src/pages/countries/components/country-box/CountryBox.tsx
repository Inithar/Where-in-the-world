import { CountryName, CountryData, Flag, Wrapper, Property, PropertyValue, StyledLink } from './CountryBox.styles';
import { IBasicCountryData } from '../../../../redux/countriesApiSlice';

export const CountryBox = (country: IBasicCountryData) => {
  const { name, region, capital, flags, population } = country;

  console.log(country);

  return (
    <StyledLink to={name.common} state={country}>
      <Wrapper>
        <Flag src={flags.png} />
        <CountryData>
          <CountryName>{name.common}</CountryName>
          <Property>
            Population: <PropertyValue>{population}</PropertyValue>
          </Property>
          <Property>
            Region: <PropertyValue>{region}</PropertyValue>
          </Property>
          <Property>
            Capital: <PropertyValue>{capital}</PropertyValue>
          </Property>
        </CountryData>
      </Wrapper>
    </StyledLink>
  );
};
