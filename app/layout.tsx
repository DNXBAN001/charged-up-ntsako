import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../utils/Navbar.jsx";
import Footer from "../utils/Footer.jsx";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charged-Up-SA",
  description: "Charged-Up-SA, Charged Up Clothing, Charged-Up Clothing Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body /*className={inter.className}*/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
