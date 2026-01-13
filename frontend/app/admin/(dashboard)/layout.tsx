import {
  SidebarProvider,
  SidebarInset,
} from "@/frontend/components/ui/sidebar";
import AdminSidebar from "@/frontend/components/admin/Sidebar";
import ToastProvider from "@/frontend/components/ToastProvider";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <main className="min-h-screen bg-gray-200 p-6">{children}</main>
      </SidebarInset>
      <ToastProvider />
    </SidebarProvider>
  );
}
