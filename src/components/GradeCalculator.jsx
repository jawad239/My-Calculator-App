import React, { useState } from 'react';

const GradeCalculator = () => {
  const [cgpa, setCGPA] = useState('');
  const [cgpaPercentage, setCGPAPercentage] = useState('');
  const [sgpa, setSGPA] = useState('');
  const [sgpaPercentage, setSGPAPercentage] = useState('');

  const convertCGPAToPercentage = () => {
    const convertedPercentage = parseFloat(cgpa) * 10;
    setCGPAPercentage(convertedPercentage.toFixed(2));
  };

  const convertSGPAToPercentage = () => {
    const convertedPercentage = parseFloat(sgpa) * 9.5;
    setSGPAPercentage(convertedPercentage.toFixed(2));
  };

  return (
    <div>
      <div className="conversion-section">
        <label>CGPA:</label>
        <input
          type="number"
          step="0.01"
          placeholder="Enter CGPA"
          value={cgpa}
          onChange={(e) => setCGPA(e.target.value)}
        />
        <br />
        <button onClick={convertCGPAToPercentage}>Convert to Percentage</button>
      <label>CGPA Percentage: {cgpaPercentage}</label>

      </div>
      <div className="result">
       
      </div>

      <div className="conversion-section">
        <label>SGPA:</label>
        <input
          type="number"
          step="0.01"
          placeholder="Enter SGPA"
          value={sgpa}
          onChange={(e) => setSGPA(e.target.value)}
        />
        <br />
        <button onClick={convertSGPAToPercentage}>Convert to Percentage</button>
        <label>SGPA Percentage: {sgpaPercentage}</label>
      </div>
      
      <div className="result">
        
      </div>
    </div>
  );
};

export default GradeCalculator;
