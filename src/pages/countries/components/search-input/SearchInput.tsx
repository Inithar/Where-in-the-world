import React, { useContext } from 'react';
import { CountriesData } from '../../../../providers/CountriesDataProvider';
import { Icon, Input, SearchBox } from './SearchInput.styles';

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  const { handleSearchBoxChange } = useContext(CountriesData);

  return (
    <SearchBox>
      <Icon />
      <Input placeholder={placeholder} onChange={handleSearchBoxChange} />
    </SearchBox>
  );
};
