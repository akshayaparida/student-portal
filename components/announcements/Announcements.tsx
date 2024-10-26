// components/announcements/Announcements.tsx
"use client"; // Ensure this is a client component

import { FC } from "react";

const Announcements: FC = () => {
  return (
    <div>
      {/* Header styled according to your requirements */}
      <h2
        className="font-outfit text-2xl font-bold text-black mb-8 p-2" // Added margin bottom for spacing
        style={{
          width: "179px",
          height: "17px",
          borderRadius: "8px", // Optional, for a rounded effect
        }}
      >
        Announcements
      </h2>

      {/* Content area for announcements */}
      <div className="bg-white border border-[#6669FE1A] rounded-[20px] w-[395px] h-[144px] p-6 flex flex-col gap-4 text-xs ">
        <div className="flex items-start  bg-gray-100 ">
          {/* Icon for the Independence Day announcement */}
          <div className="flex-shrink-0">
            <img
              src="/sun.png" // Make sure the path is correct
              alt="Sun icon representing Independence Day announcement"
              className="h-6 w-6"
            />
          </div>
          <p className="ml-3  p-2 rounded text-[#6668BE] ">
            On account of Independence Day, August 15th will be a holiday.
          </p>
        </div>

        <div className="flex items-start bg-gray-100 ">
          {/* Icon for the assignment reminder */}
          <div className="flex-shrink-0">
            <img
              src="/clipboard-text.png" // Make sure the path is correct
              alt="Clipboard icon representing assignment reminder"
              className="h-6 w-6"
            />
          </div>
          <p className="ml-3 bg-gray-100 p-2 rounded text-[#6668BE]">
            Reminder to finish your assignments and submit them by Monday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
