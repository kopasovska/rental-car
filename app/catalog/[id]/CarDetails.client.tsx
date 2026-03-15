"use client";

import { getCar } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./CarDetails.module.css";
import Image from "next/image";
import RentCarForm from "@/components/RentCarForm/RentCarForm";
import CarInfo from "@/components/CarInfo/CarInfo";

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

  return (
    <section>
      <div className="container">
        <div className={css.carDetailsWrapper}>
          <div className={css.carImageWrapper}>
            <Image
              src={car.img}
              width={276}
              height={221}
              alt={`Image of ${car.brand}, ${car.model}, ${car.year}`}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "19px",
              }}
              className={css.carImage}
            />
          </div>
          <div className={css.carInfo}>
            <CarInfo car={car} />
          </div>
          <div className={css.carForm}>
            <RentCarForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsClient;
