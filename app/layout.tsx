// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import { Poppins, Lora, Great_Vibes } from "next/font/google";
import Footer from "./components/Footer/footer";
import Greeting from "./components/greeting";
import Script from "next/script";
import BackToTopButton from "./components/BackToTopButton";

// Default font (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
      className={`${poppins.variable}`}
    >
      <head>
        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CB4W4FFLLF"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CB4W4FFLLF');
          `}
        </Script>
        <link rel="icon" type="image/png" href="/favicon.jpg" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <Navbar />
        <Greeting />
        <main className="flex-1">{children}</main>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
