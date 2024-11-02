// Modal.tsx
import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Optional children for any additional content
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-[#6a6a6a] opacity-40"
        onClick={onClose} // Close modal when overlay is clicked
      ></div>
      <div className="bg-[#6F6F6F] w-[346px] h-[170px]    max-sm:w-[260px]      rounded-[20px] shadow-md relative border border-[#6669FE1A] flex flex-col items-center justify-center">
        
        <div className="p-4 flex flex-col items-center text-[#FFFFFF]">
          <Image 
            src="/liveclass.svg" // Ensure this path is correct
            alt="No Live Classes Icon"
            width={28} // Adjust width as needed
            height={28} // Adjust height as needed
            className="mb-2"
          /> 
          <h2 className="mb-2 text-center font-bold text-[24px] leading-[23.76px] font-outfit">
            No Live Classes
          </h2>
          <p className="text-center w-[223px] h-[21px] text-[11px] leading-[11.88px] font-outfit">
            You have no live classes scheduled for today.
          </p>
          {children} {/* Render any additional children content passed to the modal */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
