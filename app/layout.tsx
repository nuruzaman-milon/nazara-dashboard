import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex gap-x-6">
          <Sidebar />
          <main className="flex-[6] bg-primary">{children}</main>
        </div>
      </body>
    </html>
  );
}
