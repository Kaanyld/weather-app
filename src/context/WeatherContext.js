
import { useState,createContext,useContext } from "react";
import cities from"../data/cities_turkey.json";

const WeatherContext = createContext(); // WeatherContext adında context oluşturuldu.
 
export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([]);
 
  const [city, setCity] = useState(cities.find(item => item.name === "İstanbul")); //Dropdown varsayılan olarak İstanbul yapıldı.

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
    <WeatherContext.Provider value={value}> //Children ile context altındaki componentslere veri aktarımı yapılıyor.
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);