//my-app/app/page.tsx
import MainContent from "@/components/MainContent"; 

export default function Home() {
  return (

    <div>
    {/* The MainContent component will be passed as children to RootLayout */}
    <main>
      <MainContent />  {/* This content will be rendered in RootLayout's <main> */}
    </main>
  </div>
    
  );
}
