import React from 'react';
import { Wrapper } from './CountryBox.styles';
import { BasicCountryData } from '../../Home';

export const CountryBox = ({ name, region, capital }: BasicCountryData) => {
  return <Wrapper>{(capital[0], name, region)}</Wrapper>;
};
