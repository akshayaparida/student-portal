// components/classSchedule/ClassSchedule.tsx

import { ClassScheduleItem } from "./ClassSchedule.types";

const ClassSchedule = () => {
  const classSchedules: ClassScheduleItem[] = [
    {
      id: 1,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "5:00 - 5:50 PM",
      logo: "/path/to/logo1.svg", // Path to your logo
      rightText: "Yesterday",
      bgColor: "#F2F2FF",  // Custom background color
      textColor: "#9899DF", // Custom text color for first line
      dateTimeColor: "#4749B3", // Custom text color for date/time
      rightTextColor: "#7577D9", // Custom color for right text
      icon: "videoicon1.svg", // Path to Class 7 icon
    },
    {
      id: 2,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "6:00 - 7:15 PM",
      logo: "/path/to/logo2.svg", // Path to your logo
      rightText: "Today",
      bgColor: "#E66DFF",  
      textColor: "#FFFFFF", // Custom text color for first line
      dateTimeColor: "#FFFFFF", // Custom text color for date/time
      rightTextColor: "#FFFFFF", // Custom color for right text
      icon: "videoicon2.svg", // Path to Class 8 icon
    },
    {
      id: 3,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "5:00 - 5:50 PM",
      logo: "/path/to/logo3.svg", // Path to your logo
      rightText: "Tomorrow",
      bgColor: "#F2F2FF",  // Custom background color
      textColor: "#9899DF", // Custom text color for first line
      dateTimeColor: "#4749B3", // Custom text color for date/time
      rightTextColor: "#7577D9", // Custom color for right text
      icon: "videoicon3.svg", // Path to Class 9 icon
    },
    {
      id: 4,
      title: "Class 7",
      subject: "Science",
      date: "Tuesday",
      time: "5:00 - 5:50 AM",
      logo: "/path/to/logo4.svg", // Path to your logo
      rightText: "23rd Sept. 2024",
      bgColor: "#FDF5FF",  // Custom background color
      textColor: "#EFABFD", // Custom text color for first line
      dateTimeColor: "#E66DFF", // Custom text color for date/time
      rightTextColor: "#E981FF", // Custom color for right text
      icon: "videoicon4.svg", // Path to Class 10 icon
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-4">Your Class Schedule</h2> {/* Header */}
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
              background: schedule.bgColor, // Use the custom background color
            }}
          >
            {/* Left Section with Icon and Text */}
            <div className="flex items-start gap-2">
              <img
                src={schedule.icon}
                alt={`${schedule.title} icon`}
                className="w-8 h-8"
                style={{ filter: `hue-rotate(${schedule.textColor})` }} // Set custom color for icon
              />
              <div>
                <p className="font-outfit text-custom-small font-light leading-custom-small text-left" style={{ color: schedule.textColor }}>
                  {schedule.title}, {schedule.subject} | Live Class
                </p>
                <p className="font-outfit text-custom-medium font-semibold leading-custom-medium text-left" style={{ color: schedule.dateTimeColor }}>
                  {schedule.date}, {schedule.time}
                </p>
              </div>
            </div>
            {/* Right Text Section with Centering */}
            <div className="flex items-center justify-center text-[10px]" style={{ color: schedule.rightTextColor }}>
              {schedule.rightText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;
