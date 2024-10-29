// app/layout.tsx
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header"; // Import your Header component

export const metadata = {
  title: "ConnectED",
  description: "Student Portal app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags can be added here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* Header Component */}
        <Header />
        <main className="h-[792px] relative bg-[#F9F9FF]">
          {children}
        </main>
      </body>
    </html>
  );
}
