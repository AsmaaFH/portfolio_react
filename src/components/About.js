import React from 'react';
import classes from './About.module.css';
import ABOUTIMG from '../images/about-us.png';
const About = () => {
  return (
    <div className={classes['about-me']}>
      <div className={classes['about-text']}>
        <h1>About Me</h1>
        <p>
          Innovative Front End Developer with 2 years of experience building and maintaining
          responsive websites in the recruiting industry. Proficient in HTML, CSS, jQuery,
          JavaScript, and React; plus modern libraries and frameworks. Passionate about User
          Experience.
        </p>

        <a
          href="https://drive.google.com/file/d/1YZW7YhikG2y7uvDYHuAKgmrDKXe3Mjl2/view?usp=sharing"
          target="_blank"
        >
          View CV
        </a>
      </div>
      <div className={classes['about-img']}>
        <img src={ABOUTIMG} alt="" />
      </div>
    </div>
  );
};

export default About;
