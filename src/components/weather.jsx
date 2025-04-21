import React, { useEffect, useState } from 'react'
import { getWeather } from '../api/weather';
import {motion} from "framer-motion";
function Weather() {
  const[weather, setWeather] = useState(null);
  useEffect(() => {
              getWeather().then(setWeather);
          }
          , []);
          var text = weather?.current?.condition?.text;
          var temp = weather?.current?.temp_c;
  return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='two-wth'>
                <div className="text">
                  <h1 className='wth-h1'>
                    Chennai
                  </h1>
                  <p className="wth-p">
                    {text} {temp}°C
                  </p>
                  <p className="wth-p">
                    Time {weather?.location?.localtime.slice(10,16)} 
                  </p>
                </div>
                </motion.div>
  )
}

export default Weather
