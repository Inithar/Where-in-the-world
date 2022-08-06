import React from 'react';
import { Icon, Input, SearchBox } from './SearchInput.styles';

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <SearchBox>
      <Icon />
      <Input placeholder={placeholder} />
    </SearchBox>
  );
};
