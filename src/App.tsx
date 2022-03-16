import React, { useEffect, useState } from "react";
import axios from "axios";

import Cities from "./components/cities/Cities";
import { City } from "./models";
import Weather from "./components/weather/Weather";

const CITIES: City[] = [
  {
    name: "Lille",
    latitude: 50.6292,
    longitude: 3.0573,
  },
  {
    name: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    name: "Marseille",
    latitude: 43.296482,
    longitude: 5.36978,
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]);
  const [minTemperature, setMinTemperature] = useState<number | null>(null);
  const [maxTemperature, setMaxTemperature] = useState<number | null>(null);

  const showWeather = minTemperature !== null && maxTemperature !== null;

  useEffect(() => {
    setMaxTemperature(null);
    setMinTemperature(null);

    const { latitude, longitude } = selectedCity;
    axios
      .get(
        `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
      )
      .then(({ data }) => data.dataseries)
      .then((dataseries) => dataseries[0])
      .then((dataserie) => dataserie.temp2m)
      .then(({ min, max }) => {
        setMaxTemperature(max);
        setMinTemperature(min);
      });
  }, [selectedCity]);

  return (
    <div className="App">
      <header>
        <h1>Weather app</h1>
      </header>
      <main>
        <Cities cities={CITIES} onChange={setSelectedCity} />
        {showWeather && <Weather min={minTemperature} max={maxTemperature} />}
        {!showWeather && <p>Récupération en cours...</p>}
      </main>
    </div>
  );
}

export default App;
