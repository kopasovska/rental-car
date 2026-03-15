import { Metadata } from "next";
import CatalogClient from "./Catalog.client";

export const metadata: Metadata = {
  title: "RentalCar | Catalog",
  description:
    "Explore our car rental catalog and choose the perfect vehicle for any journey. From compact cars for city drives to spacious SUVs for family trips — we have a car for every need.",
};

const Catalog = () => {
  return (
    <section>
      <CatalogClient />
    </section>
  );
};

export default Catalog;
