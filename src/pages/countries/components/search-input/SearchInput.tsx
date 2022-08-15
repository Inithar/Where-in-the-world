import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { Icon, Input, SearchBox } from './SearchInput.styles';
import { setSearchedCountry } from '../../../../redux/filteredCountriesSlice';

interface ISearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: ISearchInputProps) => {
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    dispatch(setSearchedCountry(value));
  };

  return (
    <SearchBox>
      <Icon />
      <Input placeholder={placeholder} onChange={handleInputChange} />
    </SearchBox>
  );
};
