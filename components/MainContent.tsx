// components/MainContent.tsx

import Announcements from "@/components/announcements/Announcements";
import ClassSchedule from "@/components/classSchedule/ClassSchedule";
import QuickLinks from "@/components/quickLinks/QuickLinks";
import ClassRecordings from "@/components/classRecordings/ClassRecordings";

const MainContent = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-14 py-10">
      <div className="space-y-4">
        <Announcements />
        <ClassSchedule />
      </div>
      <div className="space-y-4">
        <QuickLinks />
      </div>
      <div className="space-y-4">
        <ClassRecordings />
      </div>
    </div>
  );
};

export default MainContent;
