// announcements/Announcements.types.ts

export interface Announcement {
    id: number; // Unique identifier for the announcement
    title: string; // Title of the announcement
    message: string; // Detailed message or content of the announcement
    icon: string; // Path to the icon image
  }
  
  export interface AnnouncementsProps {
    announcements: Announcement[]; // Array of announcements
  }
  