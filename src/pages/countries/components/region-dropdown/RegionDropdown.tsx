import React, { useState, MouseEvent, useContext } from 'react';
import { CountriesData } from '../../../../providers/CountriesDataProvider';
import { ArrowIcon, Button, Content, Dropdown, Item } from './RegionDropdown.styles';

export const RegionDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const { handleRegionChange, currentRegion } = useContext(CountriesData);

  const handleOpenDropdown = (event: MouseEvent<HTMLDivElement>) => setIsActive(!isActive);
  const handleOptionClick = (event: MouseEvent<HTMLDivElement>, option: string) => {
    setIsActive(false);
    handleRegionChange(option);
  };

  const dropdownOptions = ['Filter by Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <Dropdown>
      <Button onClick={handleOpenDropdown}>
        {currentRegion}
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
