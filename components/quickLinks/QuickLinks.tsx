"use client";

import { useState } from "react";
import Modal from './modal';
import CanvasLMSIcon from './CanvasLMSIcon';
import JoinLiveClassIcon from './JoinLiveClassIcon';
import ContactTeacherIcon from './ContactTeacherIcon';

const QuickLinks = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const links = [
    {
      id: 1,
      title: "Canvas LMS",
      description: "Click here to access your LMS portal for assignments, class recordings, and notes.",
      color: "bg-[#4749B3]",
      icon: <CanvasLMSIcon />,
    },
    {
      id: 2,
      title: "Join Live Class",
      description: "Click here to join your live class session. Please do not share this link.",
      color: "bg-[#e66dff]", 
      icon: <JoinLiveClassIcon />,
    },
    {
      id: 3,
      title: "Contact Teacher",
      description: "Click here to contact your teacher for any doubts or concerns.",
      color: "bg-[#6669fe]",
      icon: <ContactTeacherIcon />,
    },
  ];

  return (
    <div>
      <h2 className="font-outfit text-2xl font-bold text-black mb-8 w-[170px] h-[17px] rounded-[8px]">Quick Links</h2>
      <div className="grid grid-cols-1 gap-4   max-sm:w-80 max-sm:h-64   ">
        {links.map((link) => (
          <div
            key={link.id}
            className={`transition-all duration-300 overflow-hidden ${link.color} rounded-[20px]  sm    md:w-[346px] md:h-[170px] hover:bg-white group 
              ${link.id === 1 ? 'hover:border-[1px] hover:border-solid hover:border-[#4749B31A]' : 
               link.id === 2 || link.id === 3 ? 'hover:border-[1px] hover:border-solid hover:border-[#6669FE1A]' : ''}`}
            onClick={link.id === 2 ? () => setModalOpen(true) : undefined}
          >
            <div className="flex sm:flex-col    items-center sm:items-start     justify-center  md:items-center md:h-full    ">
              <div className="flex-shrink-0">
                {link.icon}
              </div>
              <div className="text-center ">
              <h3 
                className={`mb-2 text-center font-bold text-[24px] leading-[23.76px] font-outfit 
                  ${link.id === 2 ? 'text-white group-hover:text-[#E66DFF]' : 'text-white group-hover:text-[#4749B3]'}`}
              >
                  {link.title}
                </h3>
                <p 
                  className={`text-[11px] leading-[11.88px] w-[223px] h-[21px] font-outfit hidden sm:block 
                    text-white group-hover:text-[#4749B3]`}
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
