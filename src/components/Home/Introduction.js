import React from 'react';
import classes from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <div class="hello">Hey!, I am</div>
      <h1 class="name">Asmaa Fathi</h1>
      <h2>
        I'm a <span>Frontend Developer</span>
      </h2>
    </div>
  );
};

export default Introduction;
