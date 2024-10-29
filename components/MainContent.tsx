// components/MainContent.tsx

import Announcements from "@/components/announcements/Announcements";
import ClassSchedule from "@/components/classSchedule/ClassSchedule";
import QuickLinks from "@/components/quickLinks/QuickLinks";
import ClassRecordings from "@/components/classRecordings/ClassRecording";
import { ClassRecording } from "@/components/classRecordings/ClassRecordings.types";

const MainContent = () => {
  // Sample data for class recordings
  const classRecordings: ClassRecording[] = [
    {
      id: 1,
      title: 'Algebraic Equations',
      date: '24th October, 2024',
      videoUrl: '/videos/algebraic_equations.mp4',
    },
    {
      id: 2,
      title: 'Geometry Basics',
      date: '25th October, 2024',
      videoUrl: '/videos/geometry_basics.mp4',
    },
    // Add more recordings as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-8 pl-20 py-10 font-outfit"> {/* Maintained original gap value for columns */}
      <div className="space-y-4"> {/* Space for Announcements and Class Schedule */}
        <Announcements />
        <ClassSchedule />
      </div>
      <div className="space-y-4 w-[370px]"> {/* Added pr-2 to Quick Links for reduced right padding */}
        <QuickLinks />
      </div>
      <div className="space-y-4"> {/* Space for Class Recordings */}
        <ClassRecordings /> 
      </div>
    </div>
  );
};

export default MainContent;
