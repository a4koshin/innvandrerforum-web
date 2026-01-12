import AdminSidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-gradient-to-r from-blue-900 to-blue-800 border-b border-blue-800/40 shadow-md">
          <div className="h-full flex items-center justify-between px-6">
            {/* Left - Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-800 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">
                  Admin Dashboard
                </h1>
                <p className="text-xs text-blue-300">Welcome back, John</p>
              </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-4">
              {/* Quick Actions */}
              <div className="hidden md:flex items-center gap-2">
                <button className="px-3 py-1.5 text-sm bg-red-800 hover:bg-red-700 text-white rounded-lg transition-colors font-medium">
                  New Item
                </button>
                <button className="px-3 py-1.5 text-sm bg-blue-800/50 hover:bg-blue-800 text-white rounded-lg transition-colors font-medium">
                  Export
                </button>
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-xs text-blue-300">Admin</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-800 to-red-800 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
