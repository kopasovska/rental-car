import { Car } from "@/types/car";
import css from "./CarInfo.module.css";

interface CarInfoProps {
  car: Car;
}

const CarInfo = ({ car }: CarInfoProps) => {
  const addressParts = car.address.split(",").map((part) => part.trim());
  const formattedMileage = new Intl.NumberFormat("ru-RU").format(car.mileage);

  return (
    <>
      <div className={css.basicInfo}>
        <div className={css.meta}>
          <div className={css.firstLineWrapper}>
            <p className="heading-lg text-dark">
              {car.brand} {car.model}, {car.year}
            </p>
            <p className="text-primary text-gray">Id: {car.id.slice(0, 4)}</p>
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
      <div className={css.listsWrapper}>
        <div className={css.specsListWrapper}>
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
        <div className={css.specsListWrapper}>
          <p className="heading-md" style={{ marginBottom: "20px" }}>
            Car Specifications:
          </p>
          <ul className={`${css.specsList} text-primary`}>
            <li key={crypto.randomUUID()} className={css.specsItem}>
              <svg className={css.icon}>
                <use xlinkHref="/icons.svg#icon-calendar"></use>
              </svg>
              Year: {car.year}
            </li>
            <li key={crypto.randomUUID()} className={css.specsItem}>
              <svg className={css.icon}>
                <use xlinkHref="/icons.svg#icon-car"></use>
              </svg>
              Type: {car.type}
            </li>
            <li key={crypto.randomUUID()} className={css.specsItem}>
              <svg className={css.icon}>
                <use xlinkHref="/icons.svg#icon-fuel"></use>
              </svg>
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li key={crypto.randomUUID()} className={css.specsItem}>
              <svg className={css.icon}>
                <use xlinkHref="/icons.svg#icon-gear"></use>
              </svg>
              Engine Size: {car.engineSize}
            </li>
          </ul>
        </div>
        <div className={css.specsListWrapper}>
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
    </>
  );
};

export default CarInfo;
