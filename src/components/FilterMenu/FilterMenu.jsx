import React, { useState } from "react";
import carBrands from "./carBrands.json";

const FilterMenu = ({ onFilterChange }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleBrandChange = (event) => {
    const newSelectedBrand = event.target.value;
    setSelectedBrand(newSelectedBrand);
    onFilterChange(newSelectedBrand, hourlyRate, mileageFrom, mileageTo);
  };
  const generateOptions = (start, end, step) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  };

  const handleHourlyRateChange = (event) => {
    const newHourlyRate = event.target.value;
    setHourlyRate(newHourlyRate);
    onFilterChange(selectedBrand, newHourlyRate, mileageFrom, mileageTo);
  };

  const handleMileageFromChange = (event) => {
    const newMileageFrom = event.target.value;
    setMileageFrom(newMileageFrom);
    onFilterChange(selectedBrand, hourlyRate, newMileageFrom, mileageTo);
  };

  const handleMileageToChange = (event) => {
    const newMileageTo = event.target.value;
    setMileageTo(newMileageTo);
    onFilterChange(selectedBrand, hourlyRate, mileageFrom, newMileageTo);
  };

  const handleSearchClick = () => {};

  return (
    <div>
      <label htmlFor="brandFilter">Choose a car brand:</label>
      <select
        id="brandFilter"
        name="brandFilter"
        value={selectedBrand}
        onChange={handleBrandChange}
      >
        {carBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <label htmlFor="hourlyRateFilter">
        Enter hourly rate ($10 increments):
      </label>
      <select
        id="hourlyRateFilter"
        name="hourlyRateFilter"
        value={hourlyRate}
        onChange={handleHourlyRateChange}
      >
        <option value="">Any</option>
        {generateOptions(0, 200, 10).map((value) => (
          <option key={value} value={value}>
            ${value}
          </option>
        ))}
      </select>

      <label htmlFor="mileageFrom">Mileage from (km):</label>
      <input
        type="number"
        id="mileageFrom"
        name="mileageFrom"
        value={mileageFrom}
        onChange={handleMileageFromChange}
      />

      <label htmlFor="mileageTo">Mileage to (km):</label>
      <input
        type="number"
        id="mileageTo"
        name="mileageTo"
        value={mileageTo}
        onChange={handleMileageToChange}
      />

      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default FilterMenu;
