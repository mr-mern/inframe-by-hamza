// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar/page";
import { Poppins, Lora, Great_Vibes } from "next/font/google";
import Footer from "./components/Footer/page";

// Default font (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Secondary fonts (use manually via className)
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  title: "InFrame by Hamza",
  description: "Wedding photography & videography",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lora.variable} ${greatVibes.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
