import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentalCar | Home",
  description:
    "Rent the perfect car for your journey with ease. Flexible options, transparent pricing, and 24/7 support make every drive simple and stress-free.",
  openGraph: {
    title: "RentalCar | Home",
    description:
      "Rent the perfect car for your journey with ease. Flexible options, transparent pricing, and 24/7 support make every drive simple and stress-free.",
    url: `https://rental-car-tau-inky.vercel.app/`,
    siteName: "RentalCar",
    images: [
      {
        url: "https://drive.google.com/file/d/1OSsW1YIExOqP-0YYRJkIWBGHd1s9bM8n/view?usp=sharing",
        width: 1200,
        height: 630,
        alt: "RentalCar app banner",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `RentalCar | Home`,
    description:
      "Rent the perfect car for your journey with ease. Flexible options, transparent pricing, and 24/7 support make every drive simple and stress-free.",
    images: [
      "https://drive.google.com/file/d/1OSsW1YIExOqP-0YYRJkIWBGHd1s9bM8n/view?usp=sharing",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
        <Toaster />
      </body>
    </html>
  );
}
