import Announcements from "@/components/announcements/Announcements";
import ClassSchedule from "@/components/classSchedule/ClassSchedule";
import QuickLinks from "@/components/quickLinks/QuickLinks";
import ClassRecordings from "@/components/classRecordings/ClassRecordings";
import { ClassRecording } from "@/components/classRecordings/ClassRecordings.types";

const MainContent = () => {
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

  return (
    <div className="grid grid-cols-3 gap-8 pl-20 py-10 font-outfit">
      <div className="space-y-4">
        <Announcements />
        <ClassSchedule />
      </div>
      <div className="space-y-4 w-[370px]">
        <QuickLinks />
      </div>
      <div className="space-y-4">
        <ClassRecordings classRecordings={classRecordings} />
      </div>
    </div>
  );
};

export default MainContent;
