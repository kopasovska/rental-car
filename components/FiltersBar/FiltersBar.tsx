"use client";

import { useEffect, useState } from "react";
import { getBrands } from "@/lib/api";
import { useCarStore } from "@/lib/stores/carStore";
import css from "./FiltersBar.module.css";
import CustomSelect from "../CustomSelect/CustomSelect";

const prices = ["30", "40", "50", "60", "70", "80", "90"];

export default function FiltersBar() {
  const { setFilters } = useCarStore();

  const [brands, setBrands] = useState<string[]>([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getBrands();
      setBrands(data);
    };

    fetchBrands();
  }, []);

  const handleSearch = () => {
    setFilters({
      brand,
      rentalPrice: price ? Number(price) : undefined,
      minMileage: mileageFrom ? Number(mileageFrom) : undefined,
      maxMileage: mileageTo ? Number(mileageTo) : undefined,
    });
  };

  return (
    <div className={css.filtersWrapper}>
      <div className={css.field}>
        <label className="text-secondary">Car brand</label>
        <CustomSelect
          options={brands}
          placeholder={"Choose brand"}
          onChange={(value) => setBrand(value)}
        />
      </div>
      <div className={css.field}>
        <label className="text-secondary">Price/ 1 day</label>
        <CustomSelect
          options={prices}
          placeholder={"Choose price"}
          onChange={(value) => setPrice(value)}
        />
      </div>
      <div className={css.field}>
        <label className="text-secondary">Car mileage / km</label>
        <div className={css.mileageGroup}>
          <input
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
            className={`${css.input} ${css.inputLeft} text-primary`}
          />
          <input
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
            className={`${css.input} ${css.inputRight} text-primary`}
          />
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="cta-btn"
        style={{ padding: "12px 51px", width: "auto", height: "auto" }}
      >
        Search
      </button>
    </div>
  );
}
