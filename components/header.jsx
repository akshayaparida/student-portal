import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <nav className="mx-auto py-6 px-4 sm:px-16 w-auto h-auto bg-[#6669FE] flex justify-between items-center font-outfit">
            
            <Link href={"/"} className="flex items-center">
                <Image
                    src="/logo.svg"
                    width={96.6}
                    height={49.03}
                    alt="connectED logo"
                    className="h-14 w-auto"
                />
            </Link>

          
            <h1 className="text-white font-bold text-[20px] md:text-[32px] leading-[31.68px] mb-1 flex-grow text-center">
                Student Portal
            </h1>

            {/* User Information on Medium and Larger Devices */}
            <div className="hidden md:flex flex-col items-end text-right">
                <span className="text-white text-[14px] font-semibold leading-[22px]">
                    Hello, Gabrisa!
                </span>
                <span className="text-white text-[12px] font-normal leading-[15px]">
                    Class 7, Math + Science
                </span>
            </div>
        </nav>
    );
};

export default Header;
