import React from 'react';

interface ContactTeacherIconProps {
  className?: string; // Optional className prop
}

const ContactTeacherIcon: React.FC<ContactTeacherIconProps> = ({ className }) => (
  <svg
    className={`mb-2 transition-colors duration-300 group-hover:stroke-[#6669fe] stroke-white ${className}`} // Use className prop
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M9.9292 13.3393L10.7131 12.3664C11.0434 11.956 11.4511 11.5744 11.4844 11.0272C11.4916 10.8895 11.3944 10.2703 11.2009 9.031C11.1244 8.5441 10.669 8.5 10.2757 8.5C9.7627 8.5 9.5062 8.5 9.2515 8.617C8.9293 8.7637 8.599 9.1768 8.5261 9.5233C8.4685 9.7978 8.5117 9.9868 8.5972 10.3648C8.959 11.9695 9.8095 13.5544 11.1271 14.8729C12.4456 16.1905 14.0305 17.041 15.6361 17.4028C16.0141 17.4883 16.2022 17.5315 16.4767 17.4739C16.8232 17.4019 17.2363 17.0707 17.3839 16.7485C17.5 16.4938 17.5 16.2373 17.5 15.7243C17.5 15.3301 17.4559 14.8756 16.969 14.7991C15.7297 14.6047 15.1105 14.5084 14.9728 14.5156C14.4265 14.548 14.044 14.9566 13.6336 15.2869L12.6607 16.0699"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M13 22C17.9707 22 22 17.9707 22 13C22 8.0293 17.9707 4 13 4C8.0293 4 4 8.0293 4 13C4 14.2411 4.252 15.4237 4.7056 16.4992C4.9567 17.0932 5.0818 17.3902 5.098 17.6152C5.1133 17.8402 5.0467 18.0868 4.9144 18.5809L4 22L7.4191 21.0856C7.9132 20.9533 8.1598 20.8876 8.3848 20.902C8.6098 20.9182 8.9068 21.0433 9.5008 21.2944C10.6084 21.7609 11.7982 22.0008 13 22Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactTeacherIcon;
