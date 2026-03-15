import { getCar } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarDetailsClient from "./CarDetails.client";
import { Metadata } from "next";

type CarDetailsProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: CarDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const car = await getCar(id);
  return {
    title: `RentalCar | ${car.brand} ${car.model} ${car.year}`,
    description: `${car.description}`,
    openGraph: {
      title: `Check out ${car.brand} ${car.model} ${car.year}`,
      description: car.description.slice(0, 100),
      url: `https://rental-car-git-main-viktoria-kopasovskas-projects.vercel.app/catalog/${id}`,
      siteName: "RentalCar",
      images: [
        {
          url: `${car.img}`,
          width: 600,
          height: 300,
          alt: `Image of ${car.brand} ${car.model} ${car.year}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Check out ${car.brand} ${car.model} ${car.year}`,
      description: car.description.slice(0, 3),
      images: [`${car.img}`],
    },
  };
}

const CarDetails = async ({ params }: CarDetailsProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car", id],
    queryFn: () => getCar(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarDetailsClient />
    </HydrationBoundary>
  );
};

export default CarDetails;
