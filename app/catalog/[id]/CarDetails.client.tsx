"use client";

import { getCar } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CarDetails.module.css";
import Image from "next/image";

const CarDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCar(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !car) return <p>Some error..</p>;

  const addressParts = car.address.split(",").map((part) => part.trim());
  const formattedMileage = new Intl.NumberFormat("ru-RU").format(car.mileage);
  console.log(car);

  return (
    <section>
      <div className="container">
        <div className={css.carDetailsWrapper}>
          <div className={css.carImage}>
            <Image
              src={car.img}
              width={640}
              height={512}
              alt={`Image of ${car.brand}, ${car.model}, ${car.year}`}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "19px",
              }}
            />
          </div>
          <div className={css.carInfo}>
            <div className={css.basicInfo}>
              <div className={css.meta}>
                <div className={css.firstLineWrapper}>
                  <p className="heading-lg text-dark">
                    {car.brand} {car.model}, {car.year}
                  </p>
                  <p className="text-primary text-gray">
                    Id: {car.id.slice(0, 4)}
                  </p>
                </div>
                <div className={css.secondLineWrapper}>
                  <div className={css.addressWrapper}>
                    <svg className={css.icon}>
                      <use xlinkHref="/icons.svg#icon-location"></use>
                    </svg>
                    <p>{addressParts[1]}</p>
                    <p>{addressParts[2]}</p>
                  </div>
                  <p>Mileage: {formattedMileage} km</p>
                </div>
                <p className="heading-lg text-accent">{car.rentalPrice}$</p>
              </div>
              <div className="text-primary" style={{ fontWeight: "600" }}>
                {car.description}
              </div>
            </div>
            <div>
              <p className="heading-md" style={{ marginBottom: "20px" }}>
                Rental Conditions:
              </p>
              <ul className={`${css.specsList} text-primary`}>
                {car.rentalConditions.map((c) => (
                  <li key={crypto.randomUUID()} className={css.specsItem}>
                    <svg className={css.icon}>
                      <use xlinkHref="/icons.svg#icon-check-circle"></use>
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="heading-md" style={{ marginBottom: "20px" }}>
                Car Specifications:
              </p>
            </div>
            <div>
              <p className="heading-md" style={{ marginBottom: "20px" }}>
                Accessories and functionalities:
              </p>
              <ul className={`${css.specsList} text-primary`}>
                {car.accessories.map((a) => (
                  <li key={crypto.randomUUID()} className={css.specsItem}>
                    <svg className={css.icon}>
                      <use xlinkHref="/icons.svg#icon-check-circle"></use>
                    </svg>
                    {a}
                  </li>
                ))}
                {car.functionalities.map((f) => (
                  <li key={crypto.randomUUID()} className={css.specsItem}>
                    <svg className={css.icon}>
                      <use xlinkHref="/icons.svg#icon-check-circle"></use>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.carForm}>Form</div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsClient;
