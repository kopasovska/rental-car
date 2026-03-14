"use client";

import CarList from "@/components/CarList/CarList";
import FiltersBar from "@/components/FiltersBar/FiltersBar";
import { getCars } from "@/lib/api";
import { useCarStore } from "@/lib/stores/carStore";
import { useEffect, useState } from "react";

const CatalogClient = () => {
  const { cars, filters, page, setCars, appendCars, setPage } = useCarStore();

  const [totalPages, setTotalPages] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsFetching(true);

      try {
        const data = await getCars(filters, page);

        if (page === 1) {
          setCars(data.cars);
        } else {
          appendCars(data.cars);
        }

        setTotalPages(data.totalPages);
      } finally {
        setIsFetching(false);
      }
    };

    fetch();
  }, [filters, page, setCars, appendCars]);

  return (
    <div className="container">
      <FiltersBar />
      <CarList
        cars={cars}
        page={page}
        totalPages={totalPages}
        isFetching={isFetching}
        onLoadMore={() => setPage(page + 1)}
      />
    </div>
  );
};

export default CatalogClient;
