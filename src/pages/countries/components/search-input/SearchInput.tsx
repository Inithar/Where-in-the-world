import React, { useContext } from 'react';
import { CountriesData } from '../../../../providers/CountriesDataProvider';
import { Icon, Input, SearchBox } from './SearchInput.styles';

interface ISearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: ISearchInputProps) => {
  const { handleSearchValueChange } = useContext(CountriesData);

  return (
    <SearchBox>
      <Icon />
      <Input placeholder={placeholder} onChange={handleSearchValueChange} />
    </SearchBox>
  );
};
