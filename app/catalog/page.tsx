import { getCars } from "@/lib/api";

const Catalog = async () => {
  const cars = await getCars();
  console.log(cars);
  return <div>Catalog</div>;
};

export default Catalog;
