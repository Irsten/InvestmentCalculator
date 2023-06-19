import Button from './Button';
import './ModalOverlay.css';

const ModalOverlay = (props) => {
  const onClickHandler = () => {
    props.onModalClose();
  };

  return (
    <div className='error-modal'>
      <header className='error-modal__header'>
        <h2>{props.title}</h2>
      </header>
      <div className='error-modal__content'>
        <p>{props.message}</p>
      </div>
      <footer className='error-modal__footer'>
        <Button onButtonClick={onClickHandler} title={'Okay'} />
      </footer>
    </div>
  );
};

export default ModalOverlay;
