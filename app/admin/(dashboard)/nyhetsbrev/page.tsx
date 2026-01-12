"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function NyhetsbrevPage() {
  const router = useRouter();

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
      }
    } catch {
      router.push("/admin");
    }
  }, [router]);

  return <div>Admin Newsletter</div>;
}
