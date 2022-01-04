import './Modal.css';


function Modal({ showModal, setShowModal }) {
  return <>{showModal ? <div className="bg">Modal is here</div> : null}</>;
}

export default Modal;
