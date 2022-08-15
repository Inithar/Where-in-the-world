import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICountryData } from './countriesApiSlice';

export interface FilteredCountries {
  countries: ICountryData[];
  searchedCountry: string;
  region: string;
}

const initialState: FilteredCountries = {
  countries: [],
  searchedCountry: '',
  region: 'Filter by Region',
};

export const filteredCountriesSlice = createSlice({
  name: 'filteredCountries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<ICountryData[]>) => {
      state.countries = action.payload;
    },
    setSearchedCountry: (state, action: PayloadAction<string>) => {
      state.searchedCountry = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
  },
});

export const { setCountries, setSearchedCountry, setRegion } = filteredCountriesSlice.actions;

export default filteredCountriesSlice.reducer;
