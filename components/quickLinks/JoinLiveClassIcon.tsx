import React from 'react';

interface JoinLiveClassIconProps {
  className?: string; // Optional className prop
}

const JoinLiveClassIcon: React.FC<JoinLiveClassIconProps> = ({ className }) => (
  <svg
    className={`mb-2 transition-colors duration-300 group-hover:stroke-[#e66dff] stroke-white ${className}`} // Use className prop
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M18.2672 22.1272H7.52184C3.2237 22.1272 2.14917 21.0735 2.14917 16.8588V8.4294C2.14917 4.21469 3.2237 3.16101 7.52184 3.16101H18.2672C22.5653 3.16101 23.6399 4.21469 23.6399 8.4294V16.8588C23.6399 21.0735 22.5653 22.1272 18.2672 22.1272Z" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M15.0435 8.42944H20.4161" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16.1179 12.6442H20.4161" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M18.2671 16.8588H20.4162" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9.13363 11.896C10.2078 11.896 11.0785 11.0422 11.0785 9.98888C11.0785 8.93559 10.2078 8.08173 9.13363 8.08173C8.05949 8.08173 7.18872 8.93559 7.18872 9.98888C7.18872 11.0422 8.05949 11.896 9.13363 11.896Z" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12.8943 17.2065C12.7439 15.6787 11.5081 14.4775 9.95007 14.3405C9.41281 14.2879 8.86479 14.2879 8.31678 14.3405C6.75871 14.4881 5.52299 15.6787 5.37256 17.2065" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default JoinLiveClassIcon;
