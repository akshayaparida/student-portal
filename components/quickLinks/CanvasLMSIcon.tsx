import React from 'react';

interface CanvasLMSIconProps {
  className?: string; // Optional className prop
}

const CanvasLMSIcon: React.FC<CanvasLMSIconProps> = ({ className }) => (
  <svg
    className={`mb-2 transition-colors duration-300 group-hover:stroke-[#4749B3] stroke-white ${className}`} // Use className prop
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.6399 17.6385V4.92065C23.6399 3.65624 22.5868 2.71847 21.3081 2.82383H21.2436C18.9871 3.0135 15.5594 4.14093 13.6467 5.32105L13.464 5.43695C13.1524 5.62662 12.6366 5.62662 12.325 5.43695L12.0564 5.2789C10.1437 4.10932 6.72669 2.99242 4.47016 2.8133C3.19147 2.70793 2.14917 3.65624 2.14917 4.91012V17.6385C2.14917 18.6501 2.98731 19.5984 4.01886 19.7248L4.33047 19.767C6.66221 20.0725 10.2619 21.2316 12.325 22.3379L12.368 22.359C12.6581 22.5171 13.1202 22.5171 13.3995 22.359C15.4626 21.2421 19.0731 20.0725 21.4156 19.767L21.7702 19.7248C22.8017 19.5984 23.6399 18.6501 23.6399 17.6385Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8945 5.78467V21.5898"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.32761 8.94574H5.90991"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.13351 12.1068H5.90991"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CanvasLMSIcon;
