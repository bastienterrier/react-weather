# Weather react app

This project aims at developing a mini weather application that display the min/max weather of the day of a few cities:

- Lille: latitude: 50.6292 / longitude: 3.0573
- Paris: latitude: 48.8566 / longitude: 2.3522
- Marseille: latitude: 43.296482 / longitude: 5.36978

https://user-images.githubusercontent.com/25296454/158589338-13d9cf82-aef3-47ef-badf-0d8c80eaa072.mov

## Scripts

- `npm start`: start application in dev mode
- `npm test`: launch tests (`--watch` option can be used)

## Steps

<details>
  <summary>Click to see the steps</summary>
  
  1. List all components you will need
  2. Create the `Cities` component
    - props: `cities` + `onChange`
  3. Create the `Weather` component
    - props: `min` + `max`
  4. Call the `weather api` when selecting a `city` to retrieve `min`/`max`
</details>

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
