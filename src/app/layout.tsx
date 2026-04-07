import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "VERGANI | Luxury Marine & Design",
  description: "VERGANI by Joseph Vergani. Luxury Yacht Delivery, Freelance Design, and Studio Renders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} font-sans bg-[#050505] text-[#b3b3b3] antialiased selection:bg-[#0050FF]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
