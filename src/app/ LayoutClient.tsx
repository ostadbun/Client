"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <>
      {path !== "/login" && <Navbar />}
      {children}
    </>
  );
}