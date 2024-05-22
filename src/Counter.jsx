import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

const Counter = ({ id, endVal, trigger, duration = 4 }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    if (trigger) {
      const countUp = new CountUp(counterRef.current, endVal, { duration });
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }
  }, [trigger, endVal, duration]);

  return <h2 ref={counterRef} className="text-3xl md:text-[3rem] font-bold font-count">{endVal}+</h2>;
};

export default Counter;
