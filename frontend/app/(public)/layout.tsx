import Navbar from "@/frontend/components/Navbar";
import Footer from "@/frontend/components/Footer";
import ToastProvider from "@/frontend/components/ToastProvider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ToastProvider />
    </>
  );
}
