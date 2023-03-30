import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempatureAndDetails() {
  return (
    <div>
      <div className=" flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="sun"
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        {/* side details */}
        <div className="flex flex-col space-y-2">
          {/* real feel */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real Feel:
            <span className="font-medium ml-1">32°</span>
          </div>
          {/* Humidity */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          {/* Wind */}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      {/* footer details */}
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        {/* Sun rise */}
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        {/* Sun set */}
        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">08:30 PM</span>
        </p>
        <p className="font-light">|</p>
        {/* Temp high */}
        <UilArrowUp />
        <p className="font-light">
          High: <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        {/* Temp low */}
        <UilArrowDown />
        <p className="font-light">
          Low: <span className="font-medium ml-1">40°</span>
        </p>
      </div>
    </div>
  );
}

export default TempatureAndDetails;
