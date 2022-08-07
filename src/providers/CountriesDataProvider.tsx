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
  handleSearchBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CountriesData = React.createContext<IContextInterface>({ filteredCountriesData: [], handleSearchBoxChange: () => {} });

export const CountriesDataProvider = ({ children }: ICountriesDataProviderProps) => {
  const [countriesData, setCountriesData] = useState<ICountryData[]>([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState<ICountryData[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getData<ICountryData[]>(
        'https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,tld,borders,flags,population'
      );
      setCountriesData(countries);
      setFilteredCountriesData(countries);
    };

    fetchCountries();
  }, []);

  const handleSearchBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(e.target.value);
    });

    setFilteredCountriesData(data);
  };

  return <CountriesData.Provider value={{ filteredCountriesData, handleSearchBoxChange }}>{children}</CountriesData.Provider>;
};
