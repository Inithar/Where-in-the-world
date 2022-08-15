import { useMemo } from 'react';
import { ICountryData } from '../../../../redux/countriesApiSlice';
import { DataContainer, CountryName, DataSection, Property, PropertyValue, DataSectionsContainer } from './CountryData.styles';

interface ICountryDataProps {
  data: ICountryData;
}

export const CountryData = ({ data }: ICountryDataProps) => {
  const { name, population, region, subregion, capital, tld, currencies, languages } = data;

  const NativeNameValue = useMemo((): string => {
    const key = Object.keys(name.nativeName)[0];
    return name.nativeName[key].common;
  }, [name.nativeName]);

  const currenciesValue = useMemo((): string => {
    const keys = Object.keys(currencies);
    const currenciesArray = keys.map((key) => {
      return currencies[key].name;
    });

    return currenciesArray.join(', ');
  }, [currencies]);

  const languagesValue = useMemo((): string => {
    const keys = Object.keys(languages);
    const languagesArray = keys.map((key) => {
      return languages[key];
    });

    return languagesArray.join(', ');
  }, [languages]);

  return (
    <DataContainer>
      <CountryName>{name.common}</CountryName>
      <DataSectionsContainer>
        <DataSection marginTop="16px" isLeftSection>
          <Property>
            Native Name: <PropertyValue>{NativeNameValue}</PropertyValue>
          </Property>
          <Property>
            Population: <PropertyValue>{population}</PropertyValue>
          </Property>
          <Property>
            Region: <PropertyValue>{region}</PropertyValue>
          </Property>
          <Property>
            SubRegion: <PropertyValue>{subregion}</PropertyValue>
          </Property>
          <Property>
            Capital: <PropertyValue>{capital[0]}</PropertyValue>
          </Property>
        </DataSection>
        <DataSection marginTop="32px" isRightSection>
          <Property>
            Top Level Domain: <PropertyValue>{tld.join(', ')}</PropertyValue>
          </Property>
          <Property>
            Currencies: <PropertyValue>{currenciesValue}</PropertyValue>
          </Property>
          <Property>
            Languages: <PropertyValue>{languagesValue}</PropertyValue>
          </Property>
        </DataSection>
      </DataSectionsContainer>
    </DataContainer>
  );
};
