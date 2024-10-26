// components/classSchedule/ClassSchedule.types.ts

export interface ClassScheduleItem {
    id: number;
    title: string;
    date: string;
    time: string;
  }
  
  export interface ClassScheduleProps {
    classSchedules: ClassScheduleItem[];
  }
  