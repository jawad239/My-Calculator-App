import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/currency-converter">Currency Converter</Link>
        
        <Link to="/age-calculator">Age Calculator</Link>
        
        <Link to="/grade-calculator">Grade Calculator</Link>
        
        <Link to="/bmi-calculator">BMI Calculator</Link>
        
        </div>
    </nav>
  );
};

export default Navbar;
