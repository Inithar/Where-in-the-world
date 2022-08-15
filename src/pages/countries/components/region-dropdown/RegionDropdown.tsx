import React, { useState, MouseEvent } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { ArrowIcon, Button, Content, Dropdown, Item } from './RegionDropdown.styles';
import { setRegion } from '../../../../redux/filteredCountriesSlice';

export const RegionDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const region = useAppSelector((state) => state.filteredCountries.region);
  const dispatch = useAppDispatch();

  const handleOpenDropdown = (event: MouseEvent<HTMLDivElement>) => setIsActive(!isActive);
  const handleOptionClick = (event: MouseEvent<HTMLDivElement>, option: string) => {
    setIsActive(false);
    dispatch(setRegion(option));
  };

  const dropdownOptions = ['Filter by Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <Dropdown>
      <Button onClick={handleOpenDropdown}>
        {region}
        <ArrowIcon />
      </Button>
      {isActive && (
        <Content>
          {dropdownOptions.map((option, index) => (
            <Item key={index} onClick={(event) => handleOptionClick(event, option)}>
              {option}
            </Item>
          ))}
        </Content>
      )}
    </Dropdown>
  );
};
