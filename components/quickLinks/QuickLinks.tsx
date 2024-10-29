"use client";

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      title: "Canvas LMS",
      description: "Click here to access your LMS portal for assignments, class recordings and notes.",
      color: "bg-[#4749B3]",
    

      icon: (
        <svg
          className=" mb-2 transition-colors duration-300 group-hover:stroke-[#4749B3] stroke-white"
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
      ),
    },
    {
      id: 2,
      title: "Join Live Class",
      description: "Click here to join your live class session. Please do not share this link.",
      color: "bg-[#e66dff]", 
      icon: (
        <svg
          className=" mb-2 transition-colors duration-300 group-hover:stroke-[#e66dff] stroke-white"
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
      ),
    },
    {
      id: 3,
      title: "Contact Teacher",
      description: "Click here to contact your teacher for any doubts or concerns.",
      color: "bg-[#6669fe]",
      icon: (
        <svg
          className=" mb-2 transition-colors duration-300 group-hover:stroke-[#6669fe] stroke-white"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9.9292 13.3393L10.7131 12.3664C11.0434 11.956 11.4511 11.5744 11.4844 11.0272C11.4916 10.8895 11.3944 10.2703 11.2009 9.031C11.1244 8.5441 10.669 8.5 10.2757 8.5C9.7627 8.5 9.5062 8.5 9.2515 8.617C8.9293 8.7637 8.599 9.1768 8.5261 9.5233C8.4685 9.7978 8.5117 9.9868 8.5972 10.3648C8.959 11.9695 9.8095 13.5544 11.1271 14.8729C12.4456 16.1905 14.0305 17.041 15.6361 17.4028C16.0141 17.4883 16.2022 17.5315 16.4767 17.4739C16.8232 17.4019 17.2363 17.0707 17.3839 16.7485C17.5 16.4938 17.5 16.2373 17.5 15.7243C17.5 15.3301 17.4559 14.8756 16.969 14.7991C15.7297 14.6047 15.1105 14.5084 14.9728 14.5156C14.4265 14.548 14.044 14.9566 13.6336 15.2869L12.6607 16.0699M13 22C17.9707 22 22 17.9707 22 13C22 8.0293 17.9707 4 13 4C8.0293 4 4 8.0293 4 13C4 14.2411 4.252 15.4237 4.7056 16.4992C4.9567 17.0932 5.0818 17.3902 5.098 17.6152C5.1133 17.8402 5.0467 18.0868 4.9144 18.5809L4 22L7.4191 21.0856C7.9132 20.9533 8.1598 20.8876 8.3848 20.902C8.6098 20.9182 8.9068 21.0433 9.5008 21.2944C10.6084 21.7609 11.7982 22.0008 13 22Z" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h2 className="font-outfit text-2xl font-bold text-black mb-8 w-[170px] h-[17px] rounded-[8px]   ">Quick Links</h2>
      <div className="grid grid-cols-1 gap-4">
        {links.map((link) => (
          <div
            key={link.id}
            className={`transition-all duration-300 overflow-hidden ${link.color} rounded-[20px] w-[346px] h-[170px] hover:bg-white group 
              ${link.id === 1 ? 'hover:border-[1px] hover:border-solid hover:border-[#4749B31A]' : 
               link.id === 2 || link.id === 3 ? 'hover:border-[1px] hover:border-solid hover:border-[#6669FE1A]' : ''}`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {link.icon}
              <h3 
                className={`mb-2 text-center font-bold text-[24px] leading-[23.76px] font-outfit 
                  ${link.id === 2 ? 'text-white group-hover:text-[#E66DFF]' : 'text-white group-hover:text-[#4749B3]'}`}
              >
                {link.title}
              </h3>
              <p 
                className={`text-center w-[223px] h-[21px] text-[11px] leading-[11.88px] font-outfit font-normal 
                  ${link.id === 2 ? 'text-white group-hover:text-[#E66DFF] group-hover:transition-colors duration-300' : 'text-white group-hover:text-[#4749B3]'}`}
              >
                {link.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default QuickLinks;