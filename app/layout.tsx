import Navbar from "@/src/NewsUi/Navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const metadata: Metadata = {
  title: "Orange-Times News",
  description: "Created By  Mahamudul hasan Miyad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  antialiased bg-[#FE732E] text-white dark:bg-[#9b4912] dark:text-white `}
      >
        <Navbar />
        <main className="max-w-screen-2xl mx-auto px-10 mt-10">{children}</main>
      </body>
    </html>
  );
}
