import { useState } from 'react';
import './CalculatorForm.css';
import ErrorModal from '../UI/ErrorModal';

const CalculatorForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    if (currentSavings && yearlyContribution && expectedReturn && duration) {
      props.onCalculate(userInput);
      setCurrentSavings('');
      setYearlyContribution('');
      setExpectedReturn('');
      setDuration('');
    } else {
      setShowError(true);
      const errorData = {
        title: 'Invalid input!',
        message: 'Please enter a valid name and age (non-empty values)',
      };
      setError(errorData);
    }
  };

  const inputChangeHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    switch (key) {
      case 'current-savings':
        setCurrentSavings(value);
        break;
      case 'yearly-contribution':
        setYearlyContribution(value);
        break;
      case 'expected-return':
        setExpectedReturn(value);
        break;
      case 'duration':
        setDuration(value);
        break;
      default:
        break;
    }
  };

  const resetHandler = () => {
    props.onCalculate();
    setCurrentSavings('');
    setYearlyContribution('');
    setExpectedReturn('');
    setDuration('');
  };

  // let showError = !isDataValid && isFormSubmitted;

  const modalCloseHandler = () => {
    setShowError(false);
  };

  return (
    <>
      {showError && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onModalClose={modalCloseHandler}
        />
      )}
      <form className='calculation-form' onSubmit={submitHandler}>
        <div className='input-group'>
          <p>
            <label htmlFor='current-savings'>Current Savings ($)</label>
            <input
              type='number'
              value={currentSavings}
              id='current-savings'
              placeholder='10000'
              onChange={inputChangeHandler}
            />
          </p>
          <p>
            <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
            <input
              type='number'
              value={yearlyContribution}
              id='yearly-contribution'
              placeholder='1200'
              onChange={inputChangeHandler}
            />
          </p>
        </div>
        <div className='input-group'>
          <p>
            <label htmlFor='expected-return'>
              Expected Interest (%, per year)
            </label>
            <input
              type='number'
              value={expectedReturn}
              id='expected-return'
              placeholder='5'
              onChange={inputChangeHandler}
            />
          </p>
          <p>
            <label htmlFor='duration'>Investment Duration (years)</label>
            <input
              type='number'
              value={duration}
              id='duration'
              placeholder='10'
              onChange={inputChangeHandler}
            />
          </p>
        </div>
        <p className='actions'>
          <button type='reset' className='buttonAlt' onClick={resetHandler}>
            Reset
          </button>
          <button type='submit' className='button'>
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default CalculatorForm;
