import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountriesData } from '../../providers/CountriesDataProvider';

export const Country = () => {
  const { getCountryData } = useContext(CountriesData);
  const { country } = useParams();
  const data = country ? getCountryData(country) : null;

  return <div>{data && <div>{data.capital}</div>}</div>;
};
