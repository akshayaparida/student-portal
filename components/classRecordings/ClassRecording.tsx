"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Shadcn UI Input

const ClassRecordings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const recordings = [
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

  return (
    <div className="flex flex-col items-start -ml-12">
      <h2 className="text-2xl font-bold leading-[23.76px] mb-6">
        Access Class Recordings
      </h2>

      <div className="bg-white  rounded-[20px] p-6 shadow-md w-[371px] h-[540px] flex flex-col gap-0">
        
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Search for class recordings"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[323px] h-[32px] !bg-[#f6f6fb] rounded-lg border-0 pl-10 pr-3 placeholder:font-outfit placeholder:text-[12px] placeholder:font-light placeholder:leading-[12px] placeholder:text-[#0000004D] shadow-inner"
          />
          <img
            src="/search-normal.svg"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-70"
          />
        </div>

        <div className="flex items-center mb-6">
          <span className="text-[10px] font-light font-outfit leading-[10px] text-black mr-2">
            Filter By:
          </span>
          <div className="flex gap-2 ml-auto">
            <span className="text-[10px] text-gray-600 bg-[#F6F6FB] border-0 rounded-lg px-2 py-1 flex items-center ">
              This week
              <img src="/vector.svg" alt="Point Down" className="w-3 h-3 ml-1 opacity-70" />
            </span>
            <span className="text-[10px] text-gray-600 bg-[#F6F6FB] border-0 rounded-lg px-2 py-1 flex items-center">
              All subjects
              <img src="/vector.svg" alt="Point Down" className="w-3 h-3 ml-1 opacity-70" />
            </span>
          </div>
        </div>

        {recordings.map((recording, index) => (
          <div
            key={index}
            className="w-[322px] h-[95px] border-b-[0.5px] border-b-[#0000001A] flex items-center justify-between transition-colors duration-150 group hover:border-b-[#4749B3] cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col px-0">
              <p className={`text-xs font-semibold ${hoveredIndex === index ? recording.hoverTitleColor : recording.titleColor} transition-colors duration-150 mt-[1px]`}>
                {recording.title}
              </p>
              <h3 className={`w-[160px] h-[11px] text-[16px] text-left font-bold ${hoveredIndex === index ? recording.hoverTopicColor : recording.topicColor} leading-[19px] font-outfit mb-9 m-0 transition-colors duration-150`}>
                {recording.topic}
              </h3>
              <p className="w-[100px] h-[7px] text-left font-normal text-[#727272] text-[10px] leading-[9.9px] font-outfit mt-0 mb-1">
                {recording.date}
              </p>
            </div>
            
            <div className="relative w-[100px] h-[64px] flex items-center justify-center transition-colors duration-150 group hover:bg-[#4749B3] rounded-[4px_0px_0px_0px]">
              <img src="/mask-group.svg" alt="Video Background" className="w-[100px] h-[64px] rounded-[4px_0px_0px_0px]" />
              <img
                src="/video-circle.svg"
                alt="Play Icon"
                className="absolute w-6 h-6 group-hover:hidden"
              />
              <span className="absolute hidden group-hover:flex items-center justify-center text-xs font-medium text-[#FFFFFF]">
                Play Now
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ClassRecordings;
