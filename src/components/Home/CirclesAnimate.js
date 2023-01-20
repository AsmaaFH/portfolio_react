import React from 'react';
import classes from './CircleAnimate.module.css';

const CirclesAnimate = () => {
  let name = 'ASMAA FATHI';

  return (
    <>
      {name
        .replaceAll(' ', '')
        .split('')
        .map((char, index) => {
          return (
            <div key={index} className={classes.circle}>
              {char}
            </div>
          );
        })}
    </>
  );
};

export default CirclesAnimate;
