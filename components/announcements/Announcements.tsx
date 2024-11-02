"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Announcement {
  icon: string;
  alt: string;
  text: string;
}

const announcements: Announcement[] = [
  {
    icon: "/sun.svg",
    alt: "Sun icon representing Independence Day announcement",
    text: "On account of Independence Day, August 15th will be a holiday.",
  },
  {
    icon: "/clipboard-text.svg",
    alt: "Clipboard icon representing assignment reminder",
    text: "Reminder to finish your assignments and submit them by Monday.",
  },
];

const AnnouncementItem: FC<{ announcement: Announcement }> = ({
  announcement,
}) => (
  <div className="flex items-start bg-gray-100 rounded-lg p-2 lg:p-[9px_39px_8px_16px] text-sm lg:text-base max-sm:rounded-s    ">
    <Image
      src={announcement.icon}
      alt={announcement.alt}
      width={20}
      height={20}
      className="w-4 h-4 max-sm:w-[20px] max-sm:h-[20px] mt-1 mr-2 lg:h-5 lg:w-5"
    />
    <p className="text-[#6668BE] leading-tight lg:leading-snug text-[0.8rem] lg:text-custom-sm">
      {announcement.text}
    </p>
  </div>
);

const Announcements: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <h2 className="font-outfit text-2xl   max-sm:text-[20px] font-bold text-black mb-8 w-[179px] h-[17px] rounded-[8px]">
        Announcements
      </h2>

      <div className="bg-white border border-[#6669FE1A] rounded-[20px] w-full lg:w-[395px] lg:h-[144px] max-sm:w-80 max-sm:h-24  max-sm:rounded-[12px]    p-4 flex flex-col gap-3 overflow-hidden">
        {/* Mobile animation container */}
        <div className="block lg:hidden">
          <AnnouncementItem announcement={announcements[currentIndex]} />

          {/* Dot navigation for mobile (only visible on max-sm) */}
          <div className="flex justify-center mt-4 max-sm:flex">
            {announcements.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full mx-1 ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Show announcement ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Original design for larger screens */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-3">
          {announcements.map((announcement, index) => (
            <AnnouncementItem key={index} announcement={announcement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
