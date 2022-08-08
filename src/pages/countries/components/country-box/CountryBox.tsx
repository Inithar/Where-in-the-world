import { CountryName, CountryData, Flag, Wrapper, Property, PropertyValue } from './CountryBox.styles';
import { IBasicCountryData } from '../../../../providers/CountriesDataProvider';
import { Link } from 'react-router-dom';

export const CountryBox = ({ name, region, capital, flags, population }: IBasicCountryData) => {
  return (
    <Link to={name.common}>
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
    </Link>
  );
};
