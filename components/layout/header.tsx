import { Book } from "lucide-react"

export function Header() {
  return (
    <header className="bg-[#6366F1] text-white">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6" />
              <span className="font-semibold">ConnectEd</span>
            </div>
            <div className="hidden md:block text-2xl font-semibold">
              Student Portal
            </div>
          </div>

          {/* Right side - User Info */}
          <div className="flex flex-col items-end">
            <span className="font-semibold">Hello, Gabrisa!</span>
            <span className="text-sm text-indigo-100">
              Class 7, Math + Science
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}