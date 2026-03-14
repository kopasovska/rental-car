import { getCar } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
  const { id } = await params;
  const car = await getCar(id);
  return <div></div>;
};

export default CarDetails;
