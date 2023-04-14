import React,{useEffect} from "react";
import axios from "axios";
import { useWeather } from "../context/WeatherContext";

function Day() {
    const {city,weather,setWeather,days } = useWeather(); // Kullanılacak propslar çağırılıyor.
    const api_key="e7704bc895b4a8d2dfd4a29d404285b6";
    useEffect(() => {
        
    const getCity = async() => {
        const res = axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`,
          );
          console.log((await res).data.daily)
          setWeather((await res).data.daily);
        };
    getCity();
    }, [city,setWeather]);  // city ve setWeather da değişiklik olduğunda mount edilecek.
    return (
        <div className="flex flex-row items-center justify-center mt-10 ">
          {weather.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center px-3 py-4 my-6 mr-2 ${
                index === 0
                  ? "border-2 border-slate-900 mt-2 bg-red-200 w-xl rounded-sm p-2 hover:scale-105 "
                  : "hover:opacity-80 hover:scale-105 bg-slate-500 cursor-pointer "
              } `}
            >
              <h6 className=" text-lg text-purple-900 font-bold ">
                {days[new Date(item.dt *1000).getDay()]}
              </h6>
              <img className="day-img"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description.toUpperCase()}
                title={item.weather[0].description.toUpperCase()}
              />
              <div>
                
                <span className="font-semibold mr-2">
                  {Math.round(item.temp['max'] - 273.15)}°
                </span>
                <span className="font-light">{Math.round(item.temp['min'] - 273.15)}°</span>
              </div>
            </div>
          ))} 
        </div>
       
      );
    }
    

export default React.memo(Day);