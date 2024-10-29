// components/classSchedule/ClassSchedule.tsx

import { ClassScheduleItem } from "./ClassSchedule.types";
import Image from 'next/image';

const ClassSchedule = () => {
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
      icon: "/videoicon1.svg", // Use a relative path from the public folder
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
      <h2 className="text-xl font-bold mb-4">Your Class Schedule</h2>
      <div className="bg-white p-4 shadow-md rounded-[20px] border-gray-300 w-[394px] h-[328px] flex flex-col gap-4">
        {classSchedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex justify-between items-center border-b pb-4"
            style={{
              width: "354px",
              height: "60px",
              padding: "16px",
              borderRadius: "4px",
              background: schedule.bgColor,
            }}
          >
            {/* Left Section with Icon and Text */}
            <div className="flex items-start gap-2">
              <Image
                src={schedule.icon}
                alt={`${schedule.title} icon`}
                width={32} // Matching the `w-8 h-8` Tailwind sizing
                height={32}
                style={{ color: schedule.textColor }} // Set custom color for icon if needed
              />
              <div>
                <p
                  className="font-outfit text-custom-small font-light leading-custom-small text-left"
                  style={{ color: schedule.textColor }}
                >
                  {schedule.title}, {schedule.subject} | Live Class
                </p>
                <p
                  className="font-outfit text-custom-medium font-semibold leading-custom-medium text-left"
                  style={{ color: schedule.dateTimeColor }}
                >
                  {schedule.date}, {schedule.time}
                </p>
              </div>
            </div>
            {/* Right Text Section */}
            <div
              className="flex items-center justify-center text-[10px]"
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
