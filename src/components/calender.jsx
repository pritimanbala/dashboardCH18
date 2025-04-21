import React, { useEffect } from 'react'
import { useState } from 'react';
import { getWeather } from '../api/weather';
import {motion} from "framer-motion";
function Calender() {
    const list = [["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], [1, 2, 3, 4, 5, 6, 7],[ 8, 9, 10,
        11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31, "NA", "NA", "NA", "NA"]];

        const[weather, setWeather] = useState(null);

        useEffect(() => {
            getWeather().then(setWeather);
        }
        , []);
            const date = weather?.location?.localtime;
            var day = date?.slice(8,10);
            var day = parseInt(day);
            var month = date?.slice(5,7);
            var month = parseInt(month);
            console.log(day);
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            month = monthNames[month - 1];
  return (
   
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='two-cal'>
        <h1 className='cal-h1'>
            {month}
        </h1>
        <div className="calender">
            {list.map((item) => 
            ( 
            <div className='calender-item' key={item}>
                {item.map((values) => (
                (<p style={{color: values === "NA" ? "transparent" : values === day ? "black" : "white" , backgroundColor : values === day ? "white" : "transparent", borderRadius: "50%", padding: values === day ? "3px" : "0"}} className = "calender-item" key={values}>{values}</p>)
                ))}
            </div>
            )
            )}
        </div> 
        </motion.div>
    
  )
}

export default Calender