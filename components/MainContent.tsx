// components/MainContent.tsx



import Announcements from "@/components/announcements/Announcements";
import ClassSchedule from "@/components/classSchedule/ClassSchedule";
import QuickLinks from "@/components/quickLinks/QuickLinks";
import ClassRecordings from "@/components/classRecordings/ClassRecordings";

const MainContent = () => {
  return (
    <div className="grid grid-cols-3 gap-4  m-14 ">
        <div className="space-y-4">
        <Announcements />
        <ClassSchedule />
      </div>
      <div>
        <QuickLinks />
      </div>
      <div>
        <ClassRecordings />
      </div>
    </div>
  );
};

export default MainContent;
