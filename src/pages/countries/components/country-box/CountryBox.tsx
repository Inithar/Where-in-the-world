import { CountryName, CountryData, Flag, Wrapper, Property, PropertyValue } from './CountryBox.styles';
import { IBasicCountryData } from '../../../../providers/CountriesDataProvider';

export const CountryBox = ({ name, region, capital, flags, population }: IBasicCountryData) => {
  return (
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
  );
};
