import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Tuesday, 6 Spetember 2022 | Local time: 4:20 PM
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">Tel Aviv-Jaffa, ISR</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
