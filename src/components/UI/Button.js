import './Button.css';

const Button = (props) => {
  return (
    <button className='custom-button' onClick={props.onButtonClick}>
      {props.title}
    </button>
  );
};

export default Button;
