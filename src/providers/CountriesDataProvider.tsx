import React, { ReactNode, useState, useEffect, ChangeEvent } from 'react';

interface Props {
  children: ReactNode;
}

export interface BasicCountryData {
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

interface CountryData extends BasicCountryData {
  borders: string[];
  currencies: any;
  languages: any;
  subregion: string;
  tld: string[];
}

interface ContextInterface {
  chosenCountriesData: CountryData[];
  handleSearchBoxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CountriesData = React.createContext<ContextInterface>({ chosenCountriesData: [], handleSearchBoxChange: () => {} });

export const CountriesDataProvider = ({ children }: Props) => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);
  const [chosenCountriesData, setChosenCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,tld,borders,flags,population `
      );
      const data = await response.json();
      setCountriesData(data);
      setChosenCountriesData(data);
    };

    console.log('raz');
    getData();
  }, []);

  const handleSearchBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(e.target.value);
    });

    setChosenCountriesData(data);
  };

  return <CountriesData.Provider value={{ chosenCountriesData, handleSearchBoxChange }}>{children}</CountriesData.Provider>;
};
