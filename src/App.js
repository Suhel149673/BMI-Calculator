import './App.css';
import React, { useState } from 'react';

function App() {
  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);
  const [BMI, setBMI] = useState('');
  const [message, setMessage] = useState('');

  // Logic
  let calcBMI = (e) => {
    e.preventDefault(); // Use 'e' instead of 'event'
    if (Weight === 0 || Height === 0) {
      alert('Please enter valid Weight and Height');
    } else {
      let calculatedBMI = (Weight / (Height * Height)) * 703;
      setBMI(calculatedBMI.toFixed(1));
      if (calculatedBMI < 25) {
        setMessage('You are underweight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setMessage('You are Healthy');
      } else {
        setMessage('You are Overweight');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className='App'>
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBMI}>
        <div>
          <label>Weight (lbs)</label>
          <input
            type='text'
            placeholder='Enter weight value'
            value={Weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (inches)</label>
          <input
            type='text'
            placeholder='Enter Height value'
            value={Height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className='btn' type='submit'>
            Submit
          </button>
          <button className='btn btn-outline' onClick={reload} type='button'>
            Reload
          </button>
        </div>
        <div className='center'>
          <h3>Your BMI is: {BMI}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
