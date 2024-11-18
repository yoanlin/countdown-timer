"use client";
import React, { useEffect, useState, useRef } from "react";

const FlipCard = ({
  value,
  remainingTime,
}: {
  value: number;
  remainingTime: number;
}) => {
  const [isFliping, setIsFliping] = useState(false);
  const prevValueRef = useRef<number>(value);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setIsFliping(true);
      const timer = setTimeout(() => {
        setIsFliping(false);
      }, 1000);
      prevValueRef.current = value;
      return () => clearTimeout(timer);
    }
  }, [value]);

  const renderedNumber = String(value).padStart(2, "0");

  return (
    <div className="w-[4.5rem] h-[4.5rem] md:w-[6rem] lg:w-[9rem] md:h-[6rem] lg:h-[9rem] flex flex-col items-center justify-center shadow-neutral-400 shadow-[0_6px_3px_1px_#000000]">
      <div
        className={`w-full h-[2.25rem] md:h-[3rem] lg:h-[4.5rem] bg-neutral-200 opacity-70 rounded-md overflow-hidden origin-center ${
          isFliping && "animate-[flip_1s_forwards_infinite]"
        } ${
          remainingTime === 0 && "animate-[upperpulse_1s_forwards_infinite]"
        }`}
      >
        <p className="text-secondary text-[2.5rem] md:text-5xl lg:text-7xl font-bold translate-y-1/2 text-center leading-9 md:leading-[3rem] lg:leading-[4.5rem]">
          {renderedNumber}
        </p>
      </div>
      <div
        className={`w-full h-[2.25rem] md:h-[3rem] md:leading-[3rem] lg:leading-[4.5rem]">
          {renderedNumber} lg:h-[4.5rem] bg-neutral-200 rounded-md overflow-hidden origin-center ${
            isFliping && "animate-[flip_1s_forwards_infinite]"
          } ${
          remainingTime === 0 && "animate-[lowerpulse_1s_forwards_infinite]"
        }`}
      >
        <p className="text-secondary text-[2.5rem] md:text-5xl lg:text-7xl font-bold -translate-y-1/2 text-center leading-9">
          {renderedNumber}
        </p>
      </div>
    </div>
  );
};

export default FlipCard;
