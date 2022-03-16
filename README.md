# Weather react app

This projets aims to develop a mini weather application that display the min/max weather of the day of a few cities.

https://user-images.githubusercontent.com/25296454/158589338-13d9cf82-aef3-47ef-badf-0d8c80eaa072.mov

## Scripts

- `npm start`: start application in dev mode
- `npm test`: launch tests (`--watch` option can be used)

## Weather API

We can use [7timer API](http://www.7timer.info/doc.php) to retrieve weather data. Here's an example:

`GET http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`

```json
{
  "product": "civillight",
  "init": "2022031600",
  "dataseries": [
    {
      "date": 20220316,
      "weather": "cloudy",
      "temp2m": {
        "max": 17,
        "min": 7
      },
      "wind10m_max": 3
    },
    {
      "date": 20220317,
      "weather": "clear",
      "temp2m": {
        "max": 11,
        "min": 6
      },
      "wind10m_max": 3
    },
    {
      "date": 20220318,
      "weather": "clear",
      "temp2m": {
        "max": 13,
        "min": 4
      },
      "wind10m_max": 3
    },
    {
      "date": 20220319,
      "weather": "clear",
      "temp2m": {
        "max": 14,
        "min": 5
      },
      "wind10m_max": 3
    },
    {
      "date": 20220320,
      "weather": "clear",
      "temp2m": {
        "max": 11,
        "min": 3
      },
      "wind10m_max": 3
    },
    {
      "date": 20220321,
      "weather": "lightrain",
      "temp2m": {
        "max": 10,
        "min": 6
      },
      "wind10m_max": 3
    },
    {
      "date": 20220322,
      "weather": "clear",
      "temp2m": {
        "max": 17,
        "min": 5
      },
      "wind10m_max": 2
    }
  ]
}
```

The min/max temperatures are stored in `dataseries[0].temp2m`.
