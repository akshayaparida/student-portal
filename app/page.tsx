import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">ConnectEd</span>
            <span className="text-2xl font-semibold">Student Portal</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Hello, Gabrisa!</span>
            <span className="text-sm">Class 7, Math + Science</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Announcements */}
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Announcements</h2>
              {/* Announcement content will go here */}
            </Card>

            {/* Class Schedule */}
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Your Class Schedule</h2>
              {/* Schedule content will go here */}
            </Card>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Quick Links */}
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            {/* Quick links content will go here */}
          </div>

          {/* Right Column */}
          <div>
            {/* Class Recordings */}
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Access Class Recordings</h2>
              {/* Recordings content will go here */}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}