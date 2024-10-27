import React from 'react';
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <nav className= "mx-auto py-14 px-16 w-auto h-[98px] bg-[#6669FE] flex justify-between">
  <Link href={"/"}  className="flex items-center">
  <Image
  src="/logo.svg"
width={96.6}
height={49.03}
top={24}
left={50}
gap= {0}
alt="connectED logo"
className="h-14 w-auto"
/>
  </Link>

 {/* "Student Portal" Text Centered */}
 <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-white font-outfit font-bold text-[32px] leading-[31.68px]  px-4 py-1 rounded-md mt-[-2rem]">
          Student Portal
        </h1>
      </div>

  {/* Additional Text on the Right */}
  <div className="flex flex-col items-end space-y-1  mt-[-2rem]">
        <span className="text-white text-[23.33px] font-outfit font-semibold leading-[29.4px] text-right">
          Hello, Gabrisa!
        </span>
        <span className="text-white text-[12px] font-outfit font-normal leading-[15.12px] text-right">
          Class 7, Math + Science
        </span>
      </div>


</nav>
);
};

export default header