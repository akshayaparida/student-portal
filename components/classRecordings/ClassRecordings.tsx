// components/classRecordings/ClassRecordings.tsx

"use client";

import { useState } from "react";

const ClassRecordings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const recordings = [
    { id: 1, subject: "Math", className: "Math 101", date: "2024-10-20" },
    { id: 2, subject: "History", className: "History 202", date: "2024-10-21" },
  ];

  const filteredRecordings = recordings.filter((recording) => {
    return (
      (filterSubject ? recording.subject.includes(filterSubject) : true) &&
      (filterDate ? recording.date === filterDate : true)
    );
  });

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Access Class Recordings</h2>
      
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="mb-4">
        <label className="block mb-1">Filter by Subject:</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1">Filter by Date:</label>
        <input
          type="date"
          className="border p-2 w-full"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <ul>
        {filteredRecordings.map((recording) => (
          <li key={recording.id} className="border-b py-2">
            <span className="font-semibold">{recording.subject}</span> - {recording.className} on {recording.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassRecordings;
