import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  population: number;
}

export interface ICountryData extends IBasicCountryData {
  borders: string[];
  currencies: any;
  languages: any;
  subregion: string;
  tld: string[];
}

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,languages,tld,borders,flags,population,',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<ICountryData[], void>({
      query: () => 'countries',
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
