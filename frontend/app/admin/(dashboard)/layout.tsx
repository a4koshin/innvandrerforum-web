import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin/Sidebar";
import ToastProvider from "@/components/ToastProvider";
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
