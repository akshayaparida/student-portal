// components/classRecordings/ClassRecordings.types.ts
// ClassRecordings.types.ts
export interface ClassRecording {
  title: string;
  topic: string;
  date: string;
  titleColor: string;
  topicColor: string;
  hoverTitleColor: string;
  hoverTopicColor: string;
}



export interface ClassRecordingsProps {
  classRecordings: ClassRecording[];
}
