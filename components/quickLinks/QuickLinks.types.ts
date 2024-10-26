// components/quickLinks/QuickLinks.types.ts

export interface QuickLink {
    id: number;
    title: string;
    url: string;
  }
  
  export interface QuickLinksProps {
    quickLinks: QuickLink[];
  }
  