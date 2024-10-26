// components/shadcn-ui.d.ts

declare module '@shadcn/ui' {
    import * as React from 'react';
  
    export const Button: React.FC<{ variant?: string; onClick?: () => void }>;
  
    // Card Component Declarations
    export const Card: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
    >;
  
    export const CardHeader: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
    >;
  
    export const CardTitle: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>
    >;
  
    export const CardDescription: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>
    >;
  
    export const CardContent: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
    >;
  
    export const CardFooter: React.ForwardRefExoticComponent<
      React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
    >;
  }
  