import React, { useState, useEffect } from "react";

const Task4 = () => {
  //   const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>{count}</button> */}
      <p>Current time: {time.toUTCString()}</p>
    </>
  );
};

export default Task4;
