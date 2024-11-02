"use client"; // Ensure this is a client component

import React from "react";
import Image from "next/image"; // Import Image from Next.js for optimized loading

interface VideoPlayerModalProps {
  onClose: () => void;
  className: string; // Dynamic class name
  subject: string;   // Dynamic subject name
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ onClose, className, subject }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 font-outfit  " >
      <div className="bg-[#4749B3] rounded-[28px] p-0 relative w-[50rem]    max-sm:w-[340px]  ">
        
        {/* Blue Header Div */}
        <div className="bg-[#4749B3] text-white rounded-t-lg flex items-center justify-between p-4 h-[60px]  ">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <h2 className="text-base font-light ">{className}</h2>
            <h3 className="   text-[20px] leading-5 font-bold ">{subject}</h3>
          </div>
          <button onClick={onClose} className="ml-4"> {/* Adjusted margin for button */}
            <Image 
              src="/close-circle.svg" // Path to your close icon
              alt="Close"
              width={40} // Adjust width and height as needed
              height={40}
              className="hover:opacity-80 transition-opacity" // Optional hover effect
            />
          </button>
        </div>

        {/* Placeholder for the video player implementation */}
        <div className="mt-0"> {/* No gap added here */}
        <Image
  src="/videorecording.svg"
  alt="Video Player"
  layout="responsive"         // Enables responsive resizing
  width={1119}                // Set width for aspect ratio
  height={630}                // Set height for aspect ratio
  className="w-full h-auto rounded-lg"  // Additional styling if needed
/>
        
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
