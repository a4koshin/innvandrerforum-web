"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import CreateNewsletterDialog from "@/components/admin/CreateNewsletterDialog";
import EditNewsletterDialog from "@/components/admin/EditNewsletterDialog";
import DeleteNewsletterDialog from "@/components/admin/DeleteNewsletterDialog";
import Image from "next/image";
import toast from "react-hot-toast";

type Newsletter = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default function NyhetsbrevPage() {
  const router = useRouter();
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ SAFE FETCH
  const fetchNewsletters = async () => {
    try {
      const res = await fetch("/api/newsletters");

      if (!res.ok) {
        throw new Error("Failed to fetch newsletters");
      }

      const data = await res.json();
      setNewsletters(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load newsletters");
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.replace("/admin");
      return;
    }

    try {
      const decoded: any = jwtDecode(token);
      if (decoded.role !== "ADMIN") {
        router.replace("/admin");
        return;
      }
    } catch {
      router.replace("/admin");
      return;
    }

    fetchNewsletters().finally(() => setLoading(false));
  }, [router]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Newsletters</h2>
        <CreateNewsletterDialog onCreated={fetchNewsletters} />
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading...</p>
      ) : newsletters.length === 0 ? (
        <p className="text-gray-500">No newsletters yet.</p>
      ) : (
        <div className="space-y-4">
          {newsletters.map((n) => (
            <div
              key={n.id}
              className="bg-white rounded-lg shadow p-4 flex gap-4 items-center"
            >
              <Image
                src={n.imageUrl || "/placeholder.jpg"}
                alt={n.title}
                width={320}
                height={200}
                className="w-32 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {n.description}
                </p>
              </div>

              <div className="flex gap-2">
                <EditNewsletterDialog
                  newsletter={n}
                  onUpdated={fetchNewsletters}
                />

                <DeleteNewsletterDialog
                  newsletterId={n.id}
                  onDeleted={fetchNewsletters}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
