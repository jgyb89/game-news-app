// ModalContext.js
import React, { createContext, useState, useContext } from 'react';
import './Modal.scss';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  const showModal = (modalKey) => setActiveModal(modalKey);
  const hideModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
