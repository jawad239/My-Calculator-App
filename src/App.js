import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyConverter from './components/CurrencyConvertor'
import  AgeCalculator from './components/AgeCalculator'
import  GradeCalculator  from './components/GradeCalculator';
import  BMICalculator  from './components/BMICalculator';


function App() 
{
  return (
   <BrowserRouter>
   <Navbar/>
   <div className="App">
      
      <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/currency-converter' element={<CurrencyConverter/>} />
     <Route path='/age-calculator' element={<AgeCalculator/>} />
     <Route path='/grade-calculator' element={<GradeCalculator/>} />
     <Route path='/bmi-calculator' element={<BMICalculator/>} />

      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
