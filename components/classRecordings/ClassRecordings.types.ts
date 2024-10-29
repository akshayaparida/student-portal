// components/classRecordings/ClassRecordings.types.ts

export interface ClassRecording {
  id: number;
  title: string;
  date: string;
  videoUrl: string;
}

export interface ClassRecordingsProps {
  classRecordings: ClassRecording[];
}
