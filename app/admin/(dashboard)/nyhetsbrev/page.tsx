"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { Button } from "@/components/ui/button";
import CreateNewsletterDialog from "@/components/admin/CreateNewsletterDialog";
import Image from "next/image";

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

  // ✅ Single source of truth
  const fetchNewsletters = async () => {
    const res = await fetch("/api/newsletters");
    const data = await res.json();
    setNewsletters(data);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/admin");
      return;
    }

    try {
      const decoded: any = jwtDecode(token);
      if (decoded.role !== "ADMIN") {
        router.push("/admin");
        return;
      }
    } catch {
      router.push("/admin");
      return;
    }

    // ✅ Fetch only once, after auth
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
              className="bg-white rounded-lg shadow p-4 flex gap-4"
            >
              <Image
                src={n.imageUrl}
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
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
