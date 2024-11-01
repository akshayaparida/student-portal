"use client";

import { FC, useEffect, useState } from "react";
import Image from 'next/image';

const Announcements: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = [
    {
      icon: "/sun.svg",
      alt: "Sun icon representing Independence Day announcement",
      text: "On account of Independence Day, August 15th will be a holiday."
    },
    {
      icon: "/clipboard-text.svg",
      alt: "Clipboard icon representing assignment reminder",
      text: "Reminder to finish your assignments and submit them by Monday."
    }
  ];

  // Change announcement 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 8000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [announcements.length]);

  // Function to change the current announcement based on the dot clicked
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Header for Announcements */}
      <h2 className="font-outfit text-2xl font-bold text-black mb-8 w-[179px] h-[17px] rounded-[8px]">
        Announcements
      </h2>

      {/* Content area for announcements */}
      <div className="bg-white border border-[#6669FE1A] rounded-[20px] w-full lg:w-[395px] lg:h-[144px] max-sm:w-80 max-sm:h-20 p-4 flex flex-col gap-3 overflow-hidden">
        
        {/* Mobile animation container */}
        <div className="block lg:hidden">
          {/* Animated announcement for mobile */}
          <div className="flex items-start bg-gray-100 rounded-lg p-2 text-sm">
            <Image
              src={announcements[currentIndex].icon}
              alt={announcements[currentIndex].alt}
              width={20}
              height={20}
              className="h-4 w-4 mt-1 mr-2"
            />
            <p className="text-[#6668BE] leading-tight text-[0.8rem]">
              {announcements[currentIndex].text}
            </p>
          </div>

          {/* Dot navigation for mobile */}
          <div className="flex justify-center mt-4">
            {announcements.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Original design for larger screens */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-3">
          {/* Announcement item 1 */}
          <div className="flex items-start bg-gray-100 rounded-lg p-2 lg:p-[9px_39px_8px_16px] text-sm lg:text-base">
            <Image
              src={announcements[0].icon}
              alt={announcements[0].alt}
              width={20}
              height={20}
              className="h-4 w-4 mt-1 mr-2 lg:h-5 lg:w-5"
            />
            <p className="text-[#6668BE] leading-tight lg:leading-snug text-[0.8rem] lg:text-custom-sm">
              {announcements[0].text}
            </p>
          </div>

          {/* Announcement item 2 */}
          <div className="flex items-start bg-gray-100 rounded-lg p-2 lg:p-[9px_39px_8px_16px] text-sm lg:text-base">
            <Image
              src={announcements[1].icon}
              alt={announcements[1].alt}
              width={20}
              height={20}
              className="h-4 w-4 mt-1 mr-2 lg:h-5 lg:w-5"
            />
            <p className="text-[#6668BE] leading-tight lg:leading-snug text-[0.8rem] lg:text-custom-sm">
              {announcements[1].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
