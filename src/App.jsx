import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
      setExpanded(true);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <>
      {/*Вывод шапки - строки поиска*/}
      <div className={`container ${expanded ? "expanded" : ""}`}>
        <Header
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        ></Header>

        {/*Если город не найден - вывести ошибку*/}
        {error && <p className="error">{error}</p>}

        {/*Если город найден - вывести информацию о погоде в нем*/}
        {weather && (
          <div className="weatherContainer">
            <Main weather={weather}></Main>
            <Footer weather={weather}></Footer>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
