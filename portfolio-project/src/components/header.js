import React from 'react';
import { ReactTyped } from 'react-typed';


const Header = () => {
  return (
    <div className="header-container">
      <div className='text-header'>
        <h2 className='Intro'>Web Development and Computer Repair Services</h2>
        <div>
    <ReactTyped strings={[ "Web Design","Web Development","PC Building","Computer Hardware Services", "Computer Software Services"]} 
        typeSpeed={40}
        backSpeed={50}
        loop />
  </div>
        <div className="button-group">
          <a href="#contact" className="btn btn-secondary">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
