import React, { useEffect, useState } from 'react';
import { CountryBox } from './components/country-box/CountryBox';
import { Wrapper } from './Countries.styles';

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

export const Countries = () => {
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
    <Wrapper>
      {countriesData.map((country, index) => {
        return <CountryBox key={index} {...country} />;
      })}
    </Wrapper>
  );
};
