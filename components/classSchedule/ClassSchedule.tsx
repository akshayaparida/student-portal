"use client";

import { FC } from "react";
import Image from 'next/image';
import { ClassScheduleItem } from "./ClassSchedule.types";

const ClassSchedule: FC = () => {
  const classSchedules: ClassScheduleItem[] = [
    {
      id: 1,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "5:00 - 5:50 PM",
      rightText: "Yesterday",
      bgColor: "#F2F2FF",
      textColor: "#9899DF",
      dateTimeColor: "#4749B3",
      rightTextColor: "#7577D9",
      icon: "/videoicon1.svg",
    },
    {
      id: 2,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "6:00 - 7:15 PM",
      rightText: "Today",
      bgColor: "#E66DFF",
      textColor: "#FFFFFF",
      dateTimeColor: "#FFFFFF",
      rightTextColor: "#FFFFFF",
      icon: "/videoicon2.svg",
    },
    {
      id: 3,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "5:00 - 5:50 PM",
      rightText: "Tomorrow",
      bgColor: "#F2F2FF",
      textColor: "#9899DF",
      dateTimeColor: "#4749B3",
      rightTextColor: "#7577D9",
      icon: "/videoicon3.svg",
    },
    {
      id: 4,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "5:00 - 5:50 AM",
      rightText: "23rd Sept. 2024",
      bgColor: "#FDF5FF",
      textColor: "#EFABFD",
      dateTimeColor: "#E66DFF",
      rightTextColor: "#E981FF",
      icon: "/videoicon4.svg",
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="text-2xl max-sm:text-[20px] font-bold mb-4">Your Class Schedule</h2>
      <div className="bg-white p-4 shadow-md rounded-[20px] border-gray-300 w-[394px] h-[328px] flex flex-col gap-4 max-sm:w-80 max-sm:rounded-[12px] ">
        {classSchedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex justify-between items-center border-b pb-4 w-[354px] h-[60px] p-4 rounded   max-sm:w-[296px]    "
            style={{ backgroundColor: schedule.bgColor }}
          >
            {/* Left Section with Icon and Text */}
            <div className="flex items-start gap-2">
              <Image
                src={schedule.icon}
                alt={`${schedule.title} icon`}
                width={32} // Adjust as needed
                height={32}
                className="h-8 w-8" // Adjust size for max-sm if needed
              />
              <div>
                <p
                  className="font-outfit text-custom-small font-light leading-custom-small text-left  max-sm:text-[10px]  "
                  style={{ color: schedule.textColor }}
                >
                  {schedule.title}, {schedule.subject} | Live Class
                </p>
                <p
                  className="font-outfit text-custom-medium font-semibold leading-custom-medium text-left  max-sm:text-[12px] "
                  style={{ color: schedule.dateTimeColor }}
                >
                  {schedule.date}, {schedule.time}
                </p>
              </div>
            </div>
            {/* Right Text Section */}
            <div
              className="flex items-center justify-center text-[10px]  max-sm:text-[8px]    "
              style={{ color: schedule.rightTextColor }}
            >
              {schedule.rightText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;
