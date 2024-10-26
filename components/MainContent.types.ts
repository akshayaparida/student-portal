// components/MainContent.types.ts

export interface Announcement {
    id: number;
    title: string;
    message: string;
    icon: string; // Path to the icon image
  }
  
  export interface ClassSchedule {
    id: number;
    title: string;
    date: string;
    time: string;
  }
  
  export interface QuickLink {
    id: number;
    title: string;
    url: string;
  }
  
  export interface ClassRecording {
    id: number;
    title: string;
    date: string;
    videoUrl: string;
  }
  