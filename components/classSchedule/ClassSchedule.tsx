// components/classSchedule/ClassSchedule.tsx


import { ClassScheduleItem } from "./ClassSchedule.types";

const ClassSchedule = () => {
  const classSchedules: ClassScheduleItem[] = [
    { id: 1, title: "Math 101", date: "2024-10-28", time: "10:00 AM" },
    { id: 2, title: "History 202", date: "2024-10-29", time: "1:00 PM" },
  ];

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Your Class Schedule</h2>
      <ul>
        {classSchedules.map((schedule) => (
          <li key={schedule.id} className="border-b py-2">
            <span className="font-semibold">{schedule.title}</span> - {schedule.date} at {schedule.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSchedule;
