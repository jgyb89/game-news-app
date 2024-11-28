// Modal.js
import React from 'react';
import { useModal } from './ModalContext';
import './Modal.scss';
import Search from './pages/Search'
import NotificationsComponent from './pages/modals/NotificationsComponent';


const Modal = () => {
  const { activeModal, hideModal } = useModal();

  if (!activeModal) return null;

  let content;
  switch (activeModal) {
    case '/search':
      content = <Search />;
      break;
    case '/notifications':
      content = <NotificationsComponent />;
      break;
    // Add more cases as needed
    default:
      content = null;
  }

  return (
    <div className="modal-overlay" onClick={hideModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={hideModal}></button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
