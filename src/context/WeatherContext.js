
import { useState,createContext,useContext } from "react";
import cities from"../data/cities_turkey.json";

const WeatherContext = createContext();
 
export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([]);
 
  const [city, setCity] = useState(cities.find(item => item.name === "İstanbul"));

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const value = {
    city,
    setCity,
    cities,
    days,
    weather,
    setWeather,
  };
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);