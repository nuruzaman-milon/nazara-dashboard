"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

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
        {/* it use here that we can use toast on any page */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
