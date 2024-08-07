

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Adding targetDate as a dependency

  const addLeadingZeros = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  return (
    <div className="h3">
      {timeLeft.days !== undefined &&
        <span>{addLeadingZeros(timeLeft.days)}d </span>
      }
      {timeLeft.hours !== undefined &&
        <span>{addLeadingZeros(timeLeft.hours)}h </span>
      }
      {timeLeft.minutes !== undefined &&
        <span>{addLeadingZeros(timeLeft.minutes)}m </span>
      }
      {timeLeft.seconds !== undefined &&
        <span>{addLeadingZeros(timeLeft.seconds)}s </span>
      }
    </div>
  );
};

const NewsLetter = () => {
  // Set the target date, which is 10 days from now
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000);

  return (
    <section className="max_padd py-12 xl:py-28 bg-white">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="h3">Free Shipping Fee until:</h3>
        <CountdownTimer targetDate={targetDate} />
        <h4 className="uppercase bold-18">Hurry up, time is running out for free shipping fee</h4>
      </div>
    </section>
  );
};

export default NewsLetter;

{/* <div className="flexBetween rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/5 bg-primary w-full max-w-[588px]">
  <input className="w-full bg-transparent ml-7 border-none outline-none regular-16" type="email" placeholder="Enter Your Email Address" name="email" id="email" />
  <button className="btn_dark_rounded">Sebscrive</button>
</div> */}