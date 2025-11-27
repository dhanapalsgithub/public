import React, { useEffect, useState } from "react";

const CounterBox = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter); // cleanup on unmount
  }, [end, duration]);

  return (
    <div className="counter-box">
      <h2 className="counter-number">{count}+</h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

export default CounterBox;
