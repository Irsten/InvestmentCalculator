import './Results.css';

const Results = (props) => {
  const date = new Date().getFullYear();

  const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.year}>
            <td key={item.year}>{date + item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>{formatter.format(item.totalInterest)}</td>
            <td>{formatter.format(item.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
