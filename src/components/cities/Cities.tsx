import React from "react";
import { City } from "../../models";

interface CitiesProps {
  cities: City[];
  onChange: (city: City) => void;
}

function Cities({ cities, onChange }: CitiesProps) {
  const selectCity = (name: string) => {
    const selectedCity = cities.find((city) => city.name === name);

    if (selectedCity) {
      onChange(selectedCity);
    }
  };

  return (
    <select onChange={(e) => selectCity(e.target.value)}>
      {cities.map((city) => (
        <option>{city.name}</option>
      ))}
    </select>
  );
}

export default Cities;
