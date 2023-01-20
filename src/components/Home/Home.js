import React from 'react';
import CirclesAnimate from './CirclesAnimate';
import Introduction from './Introduction';
import Overlay from './Overlay';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <div className={classes['landing-page']}>
      {props.children}
      <CirclesAnimate />
      <Overlay />
      <Introduction />
    </div>
  );
};

export default Home;
