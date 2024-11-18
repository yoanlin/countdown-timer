"use client";
import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(1209600);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime((t) => (t > 0 ? t - 1 : t));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const timeCalculations = {
    seconds: remainingTime % 60,
    minutes: Math.floor((remainingTime / 60) % 60),
    hours: Math.floor((remainingTime / 3600) % 24),
    days: Math.floor(remainingTime / 86400),
  };

  return (
    <div className="grid grid-cols-4 relative gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12 lg:mt-32">
      <div className="flex justify-center gap-2">
        <FlipCard value={timeCalculations.days} remainingTime={remainingTime} />
        <p className="cardLabel text-[0.5rem] lg:text-sm">DAYS</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FlipCard
          value={timeCalculations.hours}
          remainingTime={remainingTime}
        />
        <p className="cardLabel text-[0.5rem] lg:text-sm">HOURS</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FlipCard
          value={timeCalculations.minutes}
          remainingTime={remainingTime}
        />
        <p className="cardLabel text-[0.5rem] lg:text-sm">MINUTES</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FlipCard
          value={timeCalculations.seconds}
          remainingTime={remainingTime}
        />
        <p className="cardLabel text-[0.5rem] lg:text-sm">SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
