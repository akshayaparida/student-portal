"use client";

import React, { useState, useEffect } from "react";
import Announcements from "@/components/announcements/Announcements";
import ClassSchedule from "@/components/classSchedule/ClassSchedule";
import QuickLinks from "@/components/quickLinks/QuickLinks";
import ClassRecordings from "@/components/classRecordings/ClassRecordings";
import Popup from "@/components/Popup";
import { ClassRecording } from "@/components/classRecordings/ClassRecordings.types";
import { BellIcon } from "@heroicons/react/outline"; // Ensure you're using the correct version

const MainContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("Class 7 Math is starting in 1 hour, 34 minutes.");
  const [additionalInfo, setAdditionalInfo] = useState("You can join the live class 5 minutes before it starts. Please wait.");

  const classRecordings: ClassRecording[] = [
    {
      title: "Class 7 Math",
      topic: "Algebraic Equations",
      date: "24th October, 2024",
      titleColor: "text-[#4749B3]",
      topicColor: "text-black",
      hoverTitleColor: "text-[#A3A4D9]",
      hoverTopicColor: "text-[#4749B3]",
    },
    {
      title: "Class 7 Math",
      topic: "Inert Gases",
      date: "24th October, 2024",
      titleColor: "text-[#4749B3]",
      topicColor: "text-black",
      hoverTitleColor: "text-[#A3A4D9]",
      hoverTopicColor: "text-[#4749B3]",
    },
    {
      title: "Class 7 Science",
      topic: "Fundamentals of Organic Chemistry",
      date: "24th October, 2024",
      titleColor: "text-[#E66DFF]",
      topicColor: "text-black",
      hoverTitleColor: "text-[#f5c8ff]",
      hoverTopicColor: "text-[#E66DFF]",
    },
    {
      title: "Class 7 Math",
      topic: "Trigonometry 101",
      date: "24th October, 2024",
      titleColor: "text-[#4749B3]",
      topicColor: "text-black",
      hoverTitleColor: "text-[#A3A4D9]",
      hoverTopicColor: "text-[#4749B3]",
    },
  ];

  useEffect(() => {
    const showPopupNotification = () => {
      setShowPopup(true); // Show popup after 10 seconds
    };

    // Show popup after 10 seconds
    const timeoutId = setTimeout(showPopupNotification, 10 * 1000);

    // Cleanup function to clear timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    // Optionally, you can update the message or additional info when closing the popup
    setPopupMessage("Class has ended. Thank you for attending!"); // Example update
    setAdditionalInfo("Check the recordings for missed classes."); // Example update

    // Set a timeout to show the popup again after 30 minutes
    setTimeout(() => setShowPopup(true), 30 * 60 * 1000); // 30 minutes in milliseconds
  };

  return (
    <div className="relative grid grid-cols-3 gap-8 pl-20 py-10 font-outfit">
      {/* Left Column: Announcements and Class Schedule */}
      <div className="space-y-4">
        <Announcements />
        <ClassSchedule />
      </div>

      {/* Center Column: Quick Links */}
      <div className="space-y-4 w-[370px]">
        <QuickLinks />
      </div>

      {/* Right Column: Class Recordings */}
      <div className="space-y-4">
        <ClassRecordings classRecordings={classRecordings} />
      </div>

      {/* Notification Icon on the right side */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setShowPopup((prev) => !prev)}
          className="p-3 bg-[#4749B3] text-white rounded-full shadow-lg hover:bg-[#3b3c91] focus:outline-none"
        >
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Render Popup if showPopup is true */}
      {showPopup && (
        <Popup
          message={popupMessage}
          additionalInfo={additionalInfo}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default MainContent;
