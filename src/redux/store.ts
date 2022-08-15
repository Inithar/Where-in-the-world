import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from './countriesApiSlice';
import filteredCountriesReducer from './filteredCountriesSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    filteredCountries: filteredCountriesReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
