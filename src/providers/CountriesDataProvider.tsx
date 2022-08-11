import React, { ReactNode, useState, useEffect, ChangeEvent, useReducer } from 'react';
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

export interface ICountryData extends IBasicCountryData {
  borders: string[];
  currencies: any;
  languages: any;
  subregion: string;
  tld: string[];
}

interface IContextInterface {
  filteredCountries: ICountriesInitialState;
  handleSearchValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (region: string) => void;
}

interface ICountriesInitialState {
  countries: ICountryData[];
  searchedCountry: string;
  region: string;
}

type CountriesActionType =
  | { type: 'SET COUNTRIES'; payload: ICountryData[] }
  | { type: 'SEARCHED COUNTRY CHANGE'; payload: string }
  | { type: 'REGION CHANGE'; payload: string };

const countriesInitialState: ICountriesInitialState = {
  countries: [],
  searchedCountry: '',
  region: 'Filter by Region',
};

export const CountriesData = React.createContext<IContextInterface>({
  filteredCountries: countriesInitialState,
  handleSearchValueChange: () => {},
  handleRegionChange: () => {},
});

const countriesReducer = (state: ICountriesInitialState, action: CountriesActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET COUNTRIES':
      return {
        ...state,
        countries: payload,
      };
    case 'SEARCHED COUNTRY CHANGE':
      return {
        ...state,
        searchedCountry: payload,
      };
    case 'REGION CHANGE':
      return {
        ...state,
        region: payload,
      };
    default:
      return state;
  }
};

export const CountriesDataProvider = ({ children }: ICountriesDataProviderProps) => {
  const [countriesData, setCountriesData] = useState<ICountryData[]>([]);
  const [filteredCountries, dispatch] = useReducer(countriesReducer, countriesInitialState);
  const { searchedCountry, region } = filteredCountries;

  const handleRegionChange = (region: string) =>
    dispatch({
      type: 'REGION CHANGE',
      payload: region,
    });

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'SEARCHED COUNTRY CHANGE',
      payload: event.target.value.toLowerCase(),
    });

  useEffect(() => {
    let isCancelled = false;

    const fetchCountries = async () => {
      const countries = await getData<ICountryData[]>(
        'https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,tld,borders,flags,population'
      );
      if (!isCancelled) setCountriesData(countries);
    };

    fetchCountries();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const filteredCountriesData = countriesData.filter((country) => {
      const countryName = country.name.common.toLowerCase();

      if (region === 'Filter by Region') {
        return countryName.includes(searchedCountry);
      }

      return countryName.includes(searchedCountry) && country.region === region;
    });

    dispatch({ type: 'SET COUNTRIES', payload: filteredCountriesData });
  }, [countriesData, region, searchedCountry]);

  return <CountriesData.Provider value={{ filteredCountries, handleSearchValueChange, handleRegionChange }}>{children}</CountriesData.Provider>;
};
