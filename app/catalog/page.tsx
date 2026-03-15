import { Metadata } from "next";
import CatalogClient from "./Catalog.client";

export const metadata: Metadata = {
  title: "RentalCar | Catalog",
  description:
    "Explore our car rental catalog and choose the perfect vehicle for any journey. From compact cars for city drives to spacious SUVs for family trips — we have a car for every need.",
  openGraph: {
    title: "RentalCar | Catalog",
    description:
      "Explore our car rental catalog and choose the perfect vehicle for any journey. From compact cars for city drives to spacious SUVs for family trips — we have a car for every need.",
    url: `https://rental-car-tau-inky.vercel.app/`,
    siteName: "RentalCar",
    images: [
      {
        url: "https://res.cloudinary.com/drvp0ky5z/image/upload/v1773613120/og-banner_fb1fcs.jpg",
        width: 1200,
        height: 630,
        alt: "RentalCar app banner",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `RentalCar | Catalog`,
    description:
      "Explore our car rental catalog and choose the perfect vehicle for any journey. From compact cars for city drives to spacious SUVs for family trips — we have a car for every need.",
    images: [
      "https://res.cloudinary.com/drvp0ky5z/image/upload/v1773613120/og-banner_fb1fcs.jpg",
    ],
  },
};

const Catalog = () => {
  return (
    <section>
      <CatalogClient />
    </section>
  );
};

export default Catalog;
