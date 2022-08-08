import React, { ReactNode, useState, useEffect, ChangeEvent } from 'react';
import { getData } from '../utils/data';
interface ICountriesDataProviderProps {
  children: ReactNode;
}

export interface IBasicCountryData {
  name: {
    common: string;
    nativeName: any;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  capital: string[];
  population: string;
}

interface ICountryData extends IBasicCountryData {
  borders: string[];
  currencies: any;
  languages: any;
  subregion: string;
  tld: string[];
}

interface IContextInterface {
  filteredCountriesData: ICountryData[];
  handleSearchValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (region: string) => void;
  getCountryData: (region: string) => ICountryData | undefined;
  currentRegion: string;
}

export const CountriesData = React.createContext<IContextInterface>({
  filteredCountriesData: [],
  handleSearchValueChange: () => {},
  handleRegionChange: () => {},
  getCountryData: () => {
    return undefined;
  },
  currentRegion: 'Filter by Region',
});

export const CountriesDataProvider = ({ children }: ICountriesDataProviderProps) => {
  const [countriesData, setCountriesData] = useState<ICountryData[]>([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState<ICountryData[]>([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [currentRegion, setCurrentRegion] = useState('Filter by Region');

  const handleRegionChange = (region: string) => setCurrentRegion(region);

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => setSearchedValue(event.target.value.toLowerCase());

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getData<ICountryData[]>(
        'https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,tld,borders,flags,population'
      );
      setCountriesData(countries);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filteredCountries = countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();

      if (currentRegion === 'Filter by Region') {
        return countryName.includes(searchedValue);
      }

      return countryName.includes(searchedValue) && country.region === currentRegion;
    });

    setFilteredCountriesData(filteredCountries);
  }, [currentRegion, searchedValue, countriesData]);

  const getCountryData = (country: string) => {
    return countriesData.find((countryData) => countryData.name.common === country);
  };

  return (
    <CountriesData.Provider value={{ filteredCountriesData, handleSearchValueChange, handleRegionChange, getCountryData, currentRegion }}>
      {children}
    </CountriesData.Provider>
  );
};
