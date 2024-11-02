"use client";

import { useState } from "react";
import Modal from './modal';
import CanvasLMSIcon from './CanvasLMSIcon';
import JoinLiveClassIcon from './JoinLiveClassIcon';
import ContactTeacherIcon from './ContactTeacherIcon';
import clsx from 'clsx';

const QuickLinks = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const links = [
    {
      id: 1,
      title: "Canvas LMS",
      description: "Click here to access your LMS portal for assignments, class recordings, and notes.",
      color: "bg-[#4749B3]",
      maxSmIconBgColor: "max-sm:bg-[#5F61C0]",
      icon: <CanvasLMSIcon />,
    },
    {
      id: 2,
      title: "Join Live Class",
      description: "Click here to join your live class session. Please do not share this link.",
      color: "bg-[#e66dff]", 
      maxSmIconBgColor: "max-sm:bg-[#EB87FF]",
      icon: <JoinLiveClassIcon />,
    },
    {
      id: 3,
      title: "Contact Teacher",
      description: "Click here to contact your teacher for any doubts or concerns.",
      color: "bg-[#6669fe]",
      maxSmIconBgColor: "max-sm:bg-[#7E81FF]",
      
      icon: <ContactTeacherIcon />,
    },
  ];

  return (
    <div>
      <h2 className="font-outfit text-2xl max-sm:text-[20px] font-bold text-black mb-5 ">Quick Links</h2>
      <div className="grid grid-cols-1 gap-4 max-sm:w-80 max-sm:h-64">
        {links.map((link) => (
          <div
            key={link.id}
            className={clsx(
              "transition-all duration-300 overflow-hidden rounded-[20px] hover:bg-white group",
              link.color,
              {
                "max-sm:h-[64px] max-sm:w-[320px] max-sm:rounded-[8px]": true,
                "md:w-[346px] md:h-[170px]": true,
                "hover:border-[1px] hover:border-solid": link.id === 1 || link.id === 2 || link.id === 3,
                "hover:border-[#4749B31A]": link.id === 1,
                "hover:border-[#6669FE1A]": link.id === 2 || link.id === 3,
              }
            )}
            onClick={link.id === 2 ? () => setModalOpen(true) : undefined}
          >
            <div className="flex flex-col max-sm:flex-row items-center md:justify-center h-full">
              <div className={` ${link.maxSmIconBgColor}     max-sm:w-16 max-sm:h-16     max-sm:mr-10      flex-shrink-0 max-sm:flex   max-sm:items-center max-sm:justify-center max-sm:rounded-[8px] `}>
                {link.icon}
              </div>
              <div className="text-center max-sm:text-left max-sm:ml-2">
                <h3 
                  className={clsx(
                    "mb-2 max-sm:mb-1 font-bold text-[24px]  max-sm:text-[20px]  leading-[23.76px] font-outfit",
                    {
                      "text-white group-hover:text-[#E66DFF]": link.id === 2,
                      "text-white group-hover:text-[#4749B3]": link.id !== 2,
                    }
                  )}
                >
                  {link.title}
                </h3>
                <p 
                  className="text-[11px] leading-[11.88px] w-[223px] h-[21px] font-outfit hidden sm:block text-white group-hover:text-[#4749B3]"
                >
                  {link.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal component with `isOpen` and `onClose` props */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div>
          {/* Modal content goes here */}
        </div>
      </Modal>
    </div>
  );
};

export default QuickLinks;
