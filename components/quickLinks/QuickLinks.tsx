// components/quickLinks/QuickLinks.tsx
"use client";

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      title: "Canvas LMS",
      description: "Access your course materials and resources.",
      color: "bg-[#4749b3]", // Color for the first card
    },
    {
      id: 2,
      title: "Join Live Class",
      description: "Click here to join your live class sessions.",
      color: "bg-[#e66dff]", // Color for the second card
    },
    {
      id: 3,
      title: "Contact Teacher",
      description: "Reach out to your teacher for any questions.",
      color: "bg-[#6669fe]", // Color for the third card
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <div className="grid grid-cols-1 gap-4">
        {links.map((link) => (
          <div
            key={link.id}
            className={`rounded-lg transition-all duration-300 overflow-hidden ${link.color} border border-transparent rounded-[20px] w-[346px] h-[170px] hover:bg-white hover:border-white`} // Added hover:border-white
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* Placeholder for an icon */}
              <img src="/link-icon.png" alt="Link Icon" className="h-8 w-8 mb-2" />
              <h3 className="text-lg font-bold mb-1">{link.title}</h3>
              <p className="text-sm text-center">{link.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
