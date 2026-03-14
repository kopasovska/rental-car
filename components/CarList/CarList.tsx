import { Car } from "@/types/car";
import css from "./CarList.module.css";
import CarItem from "../CarItem/CarItem";
import Button from "../Button/Button";

interface CarListProps {
  cars: Car[];
  page?: number;
  totalPages?: number;
  isFetching?: boolean;
  onLoadMore?: () => void;
}

const CarList = ({
  cars,
  page = 1,
  totalPages = 1,
  isFetching,
  onLoadMore,
}: CarListProps) => {
  return (
    <div className={css.carsListWrapper}>
      {cars.length === 0 ? (
        <p>No cars match your search.</p>
      ) : (
        <ul className={css.carsList}>
          {cars.map((car) => (
            <li key={car.id} className={css.carsItem}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      )}

      {page < totalPages && (
        <Button
          buttonType="button"
          onClick={onLoadMore}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};

export default CarList;
