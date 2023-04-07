import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, useCount] = useState(0);

  const increment = () => {
    useCount(count + 1);
  };
  const dicrement = () => {
    useCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>+</button>
      <button className={classes.button} onClick={dicrement}>-</button>
    </div>
  );
};
