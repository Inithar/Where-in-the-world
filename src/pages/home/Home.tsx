import React, { useEffect, useState } from 'react';
import { CountryBox } from './components/country-box/CountryBox';

export interface BasicCountryData {
  name: {
    common: string;
    nativeName: any;
    official: string;
  };
  region: string;
  capital: string[];
}

interface CountryData extends BasicCountryData {
  borders: string[];
  currencies: any;
  flags: {
    png: string;
    svg: string;
  };
  languages: any;
  population: string;
  subregion: string;
  tld: string[];
}

export const Home = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,tld,borders,flags,population `
      );
      const data = await response.json();
      setCountriesData(data);
    };

    getData();
  }, []);

  return (
    <>
      {countriesData.map((country, index) => {
        return <CountryBox key={index} {...country} />;
      })}
    </>
  );
};
