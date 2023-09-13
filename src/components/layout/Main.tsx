"use client";

import { sidebarIncludeList } from "@/lib/sidebarIncludeList";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Main({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {sidebarIncludeList.includes(pathname) ? <Sidebar /> : null}

      <main className="flex-1">{children}</main>
    </div>
  );
}
