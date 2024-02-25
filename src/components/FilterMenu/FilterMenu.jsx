import React, { useState } from 'react';
import carBrands from './carBrands.json';
import {
  FilterBtn,
  FilterConatiner,
  InputContainer,
  PositionContainer,
  StyledInput,
  StyledInputRight,
  StyledLebel,
  StyledPositionInput,
  StyledPositionLabel,
  StyledSelect,
} from './FilterMenu.styled';

const FilterMenu = ({ onFilterChange }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [, setMileageFrom] = useState('');
  const [, setMileageTo] = useState('');

  const handleBrandChange = event => {
    const newSelectedBrand = event.target.value;
    setSelectedBrand(newSelectedBrand);

    // onFilterChange(newSelectedBrand, hourlyRate, mileageFrom, mileageTo);
  };
  const generateOptions = (start, end, step) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  };

  const handleHourlyRateChange = event => {
    const newHourlyRate = event.target.value;
    setHourlyRate(newHourlyRate);
    // onFilterChange(selectedBrand, newHourlyRate, mileageFrom, mileageTo);
  };

  const handleMileageFromChange = event => {
    const newMileageFrom = event.target.value;
    setMileageFrom(newMileageFrom);
    // onFilterChange(selectedBrand, hourlyRate, newMileageFrom, mileageTo);
  };

  const handleMileageToChange = event => {
    const newMileageTo = event.target.value;
    setMileageTo(newMileageTo);
    //   onFilterChange(selectedBrand, hourlyRate, mileageFrom, newMileageTo);
  };

  return (
    <FilterConatiner>
      <InputContainer>
        <StyledLebel htmlFor="brandFilter"> Сar brand</StyledLebel>
        <StyledSelect
          id="brandFilter"
          name="brandFilter"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          {carBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </StyledSelect>
      </InputContainer>
      <InputContainer>
        <StyledLebel htmlFor="hourlyRateFilter">Price/ 1 hour</StyledLebel>
        <StyledSelect
          id="hourlyRateFilter"
          name="hourlyRateFilter"
          value={hourlyRate}
          onChange={handleHourlyRateChange}
        >
          <option value="">To $</option>
          {generateOptions(30, 200, 10).map(value => (
            <option key={value} value={value}>
              ${value}
            </option>
          ))}
        </StyledSelect>
      </InputContainer>
      <InputContainer>
        <StyledLebel htmlFor="mileageFrom">Сar mileage / km</StyledLebel>
        <StyledPositionInput>
          <PositionContainer>
            <StyledPositionLabel>From</StyledPositionLabel>
            <StyledInput
              type="number"
              id="mileageFrom"
              name="mileageFrom"
              onChange={handleMileageFromChange}
            />
          </PositionContainer>
          <PositionContainer>
            <StyledPositionLabel>To</StyledPositionLabel>
            <StyledInputRight
              type="number"
              id="mileageTo"
              name="mileageTo"
              onChange={handleMileageToChange}
            />
          </PositionContainer>
        </StyledPositionInput>
      </InputContainer>
      <FilterBtn>Search</FilterBtn>
    </FilterConatiner>
  );
};

export default FilterMenu;
