import {Inter} from 'next/font/google'
import "./globals.css";



export const metadata = {
  title: "ConnectED",
  description: "Student Portal app",
};

const inter = Inter ({subsets:["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can add more meta tags or links here if needed */}
      </head>
      <body className={inter.className}>
        {/* Header*/}
        <header/>
        <main className=" h-[792px] relative   bg-[#F9F9FF]">
          {children}
        </main>
      </body>
    </html>
  );
}