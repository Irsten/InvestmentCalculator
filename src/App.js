import Header from './components/header/Header';
import CalculatorForm from './components/calculator/CalculatorForm';
import Results from './components/results/Results';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    if (userInput) {
      let currentSavings = +userInput.currentSavings;
      const initialInvestments = currentSavings;
      const yearlyContribution = +userInput.yearlyContribution;
      const expectedReturn = +userInput.expectedReturn / 100;
      const duration = +userInput.duration;

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        const totalInterest =
          currentSavings - initialInvestments - yearlyContribution * (i + 1);
        const investedCapital =
          initialInvestments + yearlyContribution * (i + 1);
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          totalInterest: totalInterest,
          yearlyContribution: yearlyContribution,
          investedCapital: investedCapital,
        });
      }
      setData(yearlyData);
    } else {
      setData('');
    }
  };

  return (
    <div>
      <Header />
      <CalculatorForm onCalculate={calculateHandler} />
      {!data ? (
        <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>
      ) : (
        <Results data={data} />
      )}
    </div>
  );
}

export default App;
