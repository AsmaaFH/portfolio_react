import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <nav className={classes.navbar}>
      <a className={classes.name}>
        <span>A</span>smaa
      </a>
      <div className={classes.links}>
        <span data-scroll="landing-page">Home</span>
        <span data-scroll="about-me">About</span>
        <span data-scroll="resume">Resume</span>
        <span data-scroll="freelancer">Freelancer</span>
        <span data-scroll="contact">Contact</span>
      </div>
      <button className={classes.toggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Header;
