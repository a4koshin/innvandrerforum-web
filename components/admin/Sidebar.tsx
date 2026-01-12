"use client";

import Link from "next/link";
import { LayoutDashboard, Mail, Users, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust path based on your setup

const menu = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Newsletters",
    href: "/admin/nyhetsbrev",
    icon: Mail,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  //   {
  //     label: "Settings",
  //     href: "/admin/settings",
  //     icon: Settings,
  //   },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64  bg-blue-900 text-white flex flex-col min-h-screen border-r border-blue-800/50">
      {/* Logo Section - Elegant & Simple */}
      <div className="h-20 flex items-center px-6 border-b border-blue-800/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-800 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Admin</h1>
            <p className="text-blue-300 text-xs font-medium">Control Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation - Clean & Modern with Shadcn Buttons */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={`
                w-full justify-start h-auto rounded-lg transition-all duration-200
                relative overflow-hidden
                ${
                  isActive
                    ? "bg-red-800/90 text-white shadow-lg hover:bg-red-800 hover:text-white"
                    : "text-blue-100 hover:bg-blue-800/50 hover:text-white"
                }
                group
              `}
            >
              <Link href={item.href}>
                {/* Active indicator line */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                )}

                {/* Icon with subtle hover effect */}
                <div
                  className={`
                  p-2 rounded-md transition-colors mr-3
                  ${
                    isActive
                      ? "bg-white/10"
                      : "bg-blue-800/30 group-hover:bg-blue-700/30"
                  }
                `}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-white" : "text-blue-300"}
                  />
                </div>

                {/* Label */}
                <span
                  className={`font-medium ${
                    isActive ? "text-white" : "text-blue-100"
                  }`}
                >
                  {item.label}
                </span>

                {/* Hover indicator for non-active items */}
                {!isActive && (
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                  </div>
                )}

                {/* Active item arrow */}
                {isActive && (
                  <div className="ml-auto">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white"></div>
                  </div>
                )}
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* Footer Section - Minimal */}
      <div className="p-4 border-t border-blue-800/50">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-blue-300">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
