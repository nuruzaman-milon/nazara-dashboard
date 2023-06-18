"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  return (
    <html lang="en">
      <body>
        {router === "/nazara-admin" ? (
          children
        ) : (
          <>
            <Navbar />
            <div className="flex gap-x-6">
              <Sidebar />
              <main className="flex-[6] bg-primary">{children}</main>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
