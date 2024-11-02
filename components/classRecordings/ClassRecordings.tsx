"use client"; // Ensure this is a client component

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust if necessary
import Image from "next/image";
import VideoPlayerModal from "./VideoPlayerModal"; // Ensure correct path
import { ClassRecording } from "@/components/classRecordings/ClassRecordings.types";

interface ClassRecordingsProps {
  classRecordings: ClassRecording[];
}

const ClassRecordings: React.FC<ClassRecordingsProps> = ({ classRecordings }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecording, setSelectedRecording] = useState<ClassRecording | null>(null);

  const handlePlayNowClick = (recording: ClassRecording) => {
    setSelectedRecording(recording);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecording(null);
  };

  return (
    <div className="flex flex-col items-start ">
      <h2 className="text-2xl    max-sm:text-[20px]  font-bold leading-[23.76px] mb-6">
        Access Class Recordings
      </h2>
      <div className="bg-white rounded-[20px] p-6 shadow-md md:w-[371px] md:h-[540px] flex flex-col gap-0  max-sm:w-80 max-sm:h-full     ">
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Search for class recordings"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[323px] h-[32px] !bg-[#f6f6fb] rounded-lg border-0 pl-10 pr-3 placeholder:font-outfit placeholder:text-[12px] placeholder:font-light placeholder:leading-[12px] placeholder:text-[#0000004D] shadow-inner"
          />
          <Image
            src="/search-normal.svg"
            alt="Search"
            width={16}
            height={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-70"
          />
        </div>
        <div className="flex items-center mb-6">
          <span className="text-[10px] font-light font-outfit leading-[10px] text-black mr-2">
            Filter By:
          </span>
          <div className="flex gap-2 ml-auto">
            <span className="text-[10px] text-gray-600 bg-[#F6F6FB] border-0 rounded-lg px-2 py-1 flex items-center">
              This week
              <Image
                src="/vector.svg"
                alt="Point Down"
                width={12}
                height={12}
                className="ml-1 opacity-70"
              />
            </span>
            <span className="text-[10px] text-gray-600 bg-[#F6F6FB] border-0 rounded-lg px-2 py-1 flex items-center">
              All subjects
              <Image
                src="/vector.svg"
                alt="Point Down"
                width={12}
                height={12}
                className="ml-1 opacity-70"
              />
            </span>
          </div>
        </div>
        {classRecordings.map((recording, index) => (
          <div
            key={index}
            className="md:w-[322px] md:h-[95px] border-b-[0.5px] border-b-[#0000001A] flex items-center justify-between transition-colors duration-150 group hover:border-b-[#4749B3] cursor-pointer max-sm:w-72 "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handlePlayNowClick(recording)} // Open modal on click
          >
            <div className="flex flex-col px-0">
              <p className={`text-xs font-semibold ${hoveredIndex === index ? recording.hoverTitleColor : recording.titleColor} transition-colors duration-150 mt-[1px]  max-sm:text-[10px]      `}>
                {recording.title}
              </p>
              <h3 className={`w-[160px] h-[11px] text-[16px] text-left font-bold ${hoveredIndex === index ? recording.hoverTopicColor : recording.topicColor} leading-[19px] font-outfit mb-9    m-0 transition-colors duration-150`}>
                {recording.topic}
              </h3>
              <p className="w-[100px] h-[7px] text-left font-normal text-[#727272] text-[10px] leading-[9.9px] font-outfit mt-0 mb-1  max-sm:mb-4   ">
                {recording.date}
              </p>
            </div>
            <div className="relative w-[100px] h-[64px]     flex items-center justify-center transition-colors duration-150 group hover:bg-[#4749B3] rounded-[4px_0px_0px_0px]">
              <Image
                src="/mask-group.svg"
                alt="Video Background"
                width={100}
                height={64}
                className="rounded-[4px_0px_0px_0px]     max-sm:h-[50px]     "
                priority={index < 2}
            
              />
              <Image
                src="/video-circle.svg"
                alt="Play Icon"
                width={24}
                height={24}
                className="absolute group-hover:hidden   max-sm:h-[19px]   "
              />
              <span className="absolute hidden group-hover:flex items-center justify-center text-xs font-medium text-[#FFFFFF]">
                Play Now
              </span>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedRecording && (
        <VideoPlayerModal
          onClose={handleCloseModal}
          className={selectedRecording.title} // Pass the class name dynamically
          subject={selectedRecording.topic} // Pass the subject name dynamically
        />
      )}
    </div>
  );
};

export default ClassRecordings;
