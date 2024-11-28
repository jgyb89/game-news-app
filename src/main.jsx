import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ModalProvider } from './ModalContext';
import Modal from './Modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <Modal />
    </ModalProvider>
  </React.StrictMode>
);
