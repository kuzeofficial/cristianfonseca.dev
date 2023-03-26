import NavBar from "=>/components/NavBar";
import type { Metadata } from "next";
import "./tailwind.css";
import { Poppins } from "next/font/google";
import { OGHome } from "=>/utils/og";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "optional",
});
export const metadata = OGHome;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="flex flex-col items-center bg-white dark:bg-[#222222] backdrop-blur-3xl ease-in-out duration-300 transition-all mx-auto">
        <main className="grid grid-cols-1 justify-center sm:w-[640px] w-full sm:px-0 px-6">
          <NavBar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
