import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const current = new Date(currentDate);

    let ageYears = current.getFullYear() - birth.getFullYear();
    let ageMonths = current.getMonth() - birth.getMonth();
    let ageDays = current.getDate() - birth.getDate();

    if (ageDays < 0) {
      const daysInLastMonth = new Date(
        current.getFullYear(),
        current.getMonth(),
        0
      ).getDate();
      ageDays += daysInLastMonth;
      ageMonths--;
    }

    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }

    setAge(`${ageYears} years, ${ageMonths} months, ${ageDays} days`);
  };

  return (
    <div>
      <label>Date of Birth:</label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <br />

      <label>Age on this date:</label>
      <input
        type="date"
        value={currentDate}
        onChange={(e) => setCurrentDate(e.target.value)}
      />

      <br />

      <button onClick={calculateAge}>Calculate Age</button>

      <br />

      <label>Age: {age}</label>
    </div>
  );
};

export default AgeCalculator;
