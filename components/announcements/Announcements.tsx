// components/announcements/Announcements.tsx
"use client";

import { FC } from "react";

const Announcements: FC = () => {
  return (
    <div>
      {/* Header for Announcements */}
      <h2
        className="font-outfit text-2xl font-bold text-black mb-8 w-[179px] h-[17px] rounded-[8px]   "
      >
        Announcements
      </h2>

      {/* Content area for announcements */}
      <div className="bg-white border border-[#6669FE1A] rounded-[20px] w-[395px] h-[144px] p-4 flex flex-col gap-3">
        
        {/* Announcement item */}
        <div className="flex items-start bg-gray-100 rounded-lg overflow-hidden   p-[9px_39px_8px_16px]     " >
          {/* Icon */}
          <img
            src="/sun.svg"
            alt="Sun icon representing Independence Day announcement"
            className="h-5 w-5 mt-1 mr-2"
          />
          {/* Text */}
          <p className="text-[#6668BE] text-custom-sm leading-snug">
            On account of Independence Day, August 15th will be a holiday.
          </p>
        </div>

        {/* Another announcement item */}
        <div className="flex items-start bg-gray-100 rounded-lg overflow-hidden  p-[9px_39px_8px_16px]    " >
          {/* Icon */}
          <img
            src="/clipboard-text.svg"
            alt="Clipboard icon representing assignment reminder"
            className="h-5 w-5 mt-1 mr-2"
          />
          {/* Text */}
          <p className="text-[#6668BE] text-custom-sm leading-snug">
            Reminder to finish your assignments and submit them by Monday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
