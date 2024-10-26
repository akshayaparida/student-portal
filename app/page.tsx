// pages/index.tsx
import Header from "@/components/header";
import MainContent from "@/components/MainContent"; // Import MainContent component

export default function Home() {
  return (
    <div>
      <Header />
      <main >
        <MainContent /> {/* Render MainContent below the Header */}
      </main>
    </div>
  );
}
