export default function Main({ weather }) {
  {/*Массив с погодными иконками*/}
  const iconDictionary = {
    "01d": "src\\assets\\svg\\clear-day.svg",
    "02d": "src\\assets\\svg\\overcast-day.svg",
    "03d": "src\\assets\\svg\\cloudy.svg",
    "04d": "src\\assets\\svg\\extreme-day.svg",
    "09d": "src\\assets\\svg\\extreme-rain.svg",
    "10d": "src\\assets\\svg\\extreme-day-rain.svg",
    "11d": "src\\assets\\svg\thunderstorms-overcast.svg",
    "13d": "src\\assets\\svg\\snow.svg",
    "50d": "src\\assets\\svg\\mist.svg",
    "01n": "src\\assets\\svg\\clear-night.svg",
    "02n": "src\\assets\\svg\\overcast-night.svg",
    "03n": "src\\assets\\svg\\cloudy.svg",
    "04n": "src\\assets\\svg\\extreme-night.svg",
    "09n": "src\\assets\\svg\\extreme-rain.svg",
    "10n": "src\\assets\\svg\\extreme-night-rain.svg",
    "11n": "src\\assets\\svg\\thunderstorms-overcast.svg",
    "13n": "src\\assets\\svg\\snow.svg",
    "50n": "src\\assets\\svg\\mist.svg",
  };

  return (
    <main>
      {/*Вывод погодной иконки*/}
      <img src={iconDictionary[weather.weather[0].icon]} alt="" />

      {/*Вывод значения температуры*/}
      <p className="temperatureText">{Math.round(weather.main.temp)}°C</p>

      {/*Вывод города*/}
      <h2>{weather.name}</h2>

      {/*Вывод описания погоды*/}
      <p className="weatherDescription">{weather.weather[0].description}</p>
    </main>
  );
}
