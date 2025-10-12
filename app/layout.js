import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { LoadingProvider } from "../contexts/LoadingContext";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { defaultSEO } from "./action/seo";

export const metadata = defaultSEO;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <ClientLayout>
            <div className=" flex flex-col grid-background">
              <Navbar />
            </div>
            {children}
            <Footer />
          </ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
