import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const ErrorModal = (props) => {
  const modalCloseHandler = () => {
    props.onModalClose();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={modalCloseHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onModalClose={modalCloseHandler}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
