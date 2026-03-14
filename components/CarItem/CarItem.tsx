"use client";

import Image from "next/image";
import css from "./CarItem.module.css";
import Link from "next/link";
import { useCarStore } from "@/lib/stores/carStore";
import { Car } from "@/types/car";

interface CarItemProps {
  car: Car;
}

const CarItem = ({ car }: CarItemProps) => {
  const { favorites, toggleFavorite } = useCarStore();

  const isFavorite = favorites.includes(car.id);

  const addressParts = car.address.split(",").map((part) => part.trim());
  const formattedMileage = new Intl.NumberFormat("ru-RU").format(car.mileage);

  return (
    <div className={css.carCard}>
      <Image
        src={car.img}
        alt={`Image of ${car.brand}, ${car.model}, ${car.year}`}
        width={276}
        height={268}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className={css.carImage}
      />
      <button
        type="button"
        onClick={() => toggleFavorite(car.id)}
        className={css.favorites}
      >
        <svg
          width="16"
          height="16"
          className={isFavorite ? css.iconActive : css.icon}
        >
          <use href={`/icons.svg#icon-heart`} />
        </svg>
      </button>
      <div className={css.carInfo}>
        <div className={css.mainInfo}>
          <p className="text-primary">
            {car.brand}{" "}
            <span className="text-primary text-accent">{car.model}</span>,{" "}
            {car.year}
          </p>
          <p className="text-primary">{car.rentalPrice}$</p>
        </div>
        <ul className={css.additionalInfo}>
          <li className="text-secondary">{addressParts[1]}</li>
          <li className="text-secondary">{addressParts[2]}</li>
          <li className="text-secondary">{car.rentalCompany}</li>
          <li className="text-secondary">{car.type}</li>
          <li className="text-secondary">{formattedMileage} km</li>
        </ul>
      </div>
      <Link href={`/catalog/${car.id}`} className="cta-btn">
        Read more
      </Link>
    </div>
  );
};

export default CarItem;
