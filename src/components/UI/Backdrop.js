import './Backdrop.css';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onModalClose}></div>;
};

export default Backdrop;
