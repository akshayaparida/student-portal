// app/layout.tsx
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header"; 

export const metadata = {
  title: "ConnectED",
  description: "Student Portal app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Student Portal app" />
        <meta property="og:title" content="ConnectED" />
        <meta property="og:description" content="Student Portal app" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen relative bg-[#F9F9FF]">
          {children}
        </main>
      </body>
    </html>
  );
}
