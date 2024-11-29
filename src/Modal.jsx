import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";
import "./Modal.scss";
import Search from "./features/search/Search";
import Notifications from "./pages/Notifications";

const Modal = () => {
  const { activeModal, hideModal } = useModal();
  const [animationClass, setAnimationClass] = useState("");
  const [renderModal, setRenderModal] = useState(false);

  useEffect(() => {
    if (activeModal) {
      setRenderModal(true); // Start rendering the modal
      setAnimationClass("modal-slide-in");
    } else if (animationClass === "modal-slide-in") {
      setAnimationClass("modal-slide-out");
    }
  }, [activeModal]);

  const handleAnimationEnd = () => {
    if (animationClass === "modal-slide-out") {
      setAnimationClass(""); // Reset animation class
      setRenderModal(false); // Stop rendering the modal after slide-out
    }
  };

  // Only render modal content when `renderModal` is true
  if (!renderModal) return null;

  let content = null;
  if (activeModal === "/search") {
    content = <Search isVisible={renderModal} />;
  } else if (activeModal === "/notifications") {
    content = <Notifications />;
  }

  return (
    <div
      className={`modal-overlay ${animationClass}`}
      onClick={hideModal}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={hideModal}></button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
