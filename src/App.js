import React from 'react';
import Main from './components/Main';
import './App.css';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return ( 
  <>
    
    <span className='flex justify-center text-[70px] font-bold bg-gradient-to-r text-transparent bg-clip-text to-orange-300 from-sky-400'>Weather App</span>
   <WeatherProvider>
    
    <Main />
    
   </WeatherProvider>
   </>
   
  );
}

export default App;
