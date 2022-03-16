import React from "react";

import "./Weather.css";

interface WeatherProps {
  min: number;
  max: number;
}

function Weather({ min, max }: WeatherProps) {
  return (
    <p>
      Température entre <span className="min">{min}</span>°C et{" "}
      <span className="max">{max}</span>°C
    </p>
  );
}

export default Weather;
