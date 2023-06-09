import React, { useState } from 'react';


const BmiCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    // Calculate BMI logic goes here
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category and build the result message
    let resultMessage = '';
    let category = '';
    if (bmi < 18.5) {
      resultMessage = `BMI = ${bmi.toFixed(1)} kg/m2 (Underweight)\n\nEat a balanced diet and consult a healthcare professional for guidance on how to reach a healthy weight.`;
      category = 'underweight';
    } else if (bmi < 25) {
      resultMessage = `BMI = ${bmi.toFixed(1)} kg/m2 (Normal)\n\nCongratulations! You have a healthy weight for your height.`;
      category = 'normal';
    } else if (bmi < 30) {
      resultMessage = `BMI = ${bmi.toFixed(1)} kg/m2 (Overweight)\n\nConsider adopting a balanced diet and engaging in regular exercise to reach a healthy weight.`;
      category = 'overweight';
    } else {
      resultMessage = `BMI = ${bmi.toFixed(1)} kg/m2 (Obesity)\n\nIt is important to prioritize your health. Consult a healthcare professional for personalized advice on managing your weight.`;
      category = 'obesity';
    }

    // Additional result messages
    const healthyBmiRange = 'Healthy BMI range: 18.5 kg/m2 - 25 kg/m2';
    // const healthyWeightRange = 'Healthy weight for the height: 54.7 kgs - 74.0 kgs';

    setResult(`${resultMessage}\n\n${healthyBmiRange}\n`);
    setBmiCategory(category);
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="bmi-inputs">
        <label>Age:</label>
        <input type="number" min="2" max="120" value={age} onChange={e => setAge(e.target.value)} />
        <label>Gender:</label>
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
          Female
        </label>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      <div className="bmi-result">{result}</div>
      <div className="bmi-chart">
        <div className={`semicircle ${bmiCategory}`} />
        <div className={`limit underweight`} />
        <div className={`limit normal`} />
        <div className={`limit overweight`} />
        <div className={`pointer ${bmiCategory}`} />
      </div>
    </div>
  );
};

export default BmiCalculator;
