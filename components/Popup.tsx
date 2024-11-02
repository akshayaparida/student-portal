"use client"

import React from "react";
import { BellIcon } from "@heroicons/react/solid"; // Importing the solid version of the BellIcon

interface PopupProps {
  message: string;
  additionalInfo: string; // Additional information to display
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, additionalInfo, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 rounded-lg shadow-lg w-[500px]    mx-auto space-y-4 flex flex-col items-center">
        {/* First Box: Notification */}
        <div className="bg-white p-2  shadow-md flex items-center md:justify-center w-[460px] h-[36px]   max-sm:w-[320px]  rounded-[13.33px]">
          <div className="flex items-center    " >
            <BellIcon className="h-4 w-4 text-[#E66DFF] mr-2" aria-hidden="true"    />
            <p className="text-[#E66DFF] font-bold text-[16px] w-[370px] h-[17px] mb-1.5  max-sm:w-[320px]      max-sm:text-[12px]  ">
              {message}
            </p>
          </div>
        </div>
        
        {/* Second Box: Additional Information */}
        <div className="bg-white p-4 shadow-md flex flex-col items-center justify-center w-[392px] h-[213px] max-sm:w-[320px]  rounded-[20px]">
          <p className="w-[268px] h-[95px] opacity-100 font-outfit text-[24px]  max-sm:text-[20px] font-bold leading-[26px] text-center text-[#6669FE] mt-4">
            {additionalInfo}
          </p>
          
          {/* Okay Button */}
          <button
            onClick={onClose}
            className="w-[86px] h-[31px] rounded-[21.97px] bg-[#4749B3] text-white flex justify-center items-center mt-4"
          >
            <span className="font-outfit text-[13.91px] font-bold leading-[13.77px]">
              Okay.
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
