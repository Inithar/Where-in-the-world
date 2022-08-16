import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { Icon, Input, SearchBox } from './SearchInput.styles';
import { setSearchedCountry } from '../../../../redux/filteredCountriesSlice';
import { useAppSelector } from '../../../../hooks/useAppSelector';

interface ISearchInputProps {
  placeholder: string;
  value: string;
}

export const SearchInput = ({ placeholder, value }: ISearchInputProps) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    dispatch(setSearchedCountry(value));
  };

  return (
    <SearchBox>
      <Icon currentTheme={currentTheme} />
      <Input placeholder={placeholder} onChange={handleInputChange} value={value} />
    </SearchBox>
  );
};
