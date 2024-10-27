// pages/index.tsx
import Header from "@/components/header";
import MainContent from "@/components/MainContent"; 

export default function Home() {
  return (
    <div>
      <Header />
      <main >
        <MainContent /> 
      </main>
    </div>
  );
}
