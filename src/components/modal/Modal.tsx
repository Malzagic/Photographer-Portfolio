import React from "react";

import { IoIosClose } from "react-icons/io";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-gray-900 rounded-lg p-4 w-screen h-screen mx-auto">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <IoIosClose
            size={32}
            className="hover:text-yellow-400 transition-all"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
