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
    title: `RentalCar | Catalog`,
    description:
      "Explore our car rental catalog and choose the perfect vehicle for any journey. From compact cars for city drives to spacious SUVs for family trips — we have a car for every need.",
    images: [
      "https://drive.google.com/file/d/1OSsW1YIExOqP-0YYRJkIWBGHd1s9bM8n/view?usp=sharing",
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
