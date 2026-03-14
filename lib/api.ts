import { Car } from "@/types/car";
import { Filters } from "@/types/filters";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface CarListResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export const getCars = async (filters: Filters = {}, page: number = 1) => {
  const params = { ...filters, page };

  const { data } = await axios.get<CarListResponse>("/cars", { params });
  return data;
};

export const getCar = async (id: string) => {
  const { data } = await axios.get<Car>(`/cars/${id}`);
  return data;
};

export const getBrands = async () => {
  const { data } = await axios.get<string[]>("/brands");
  return data;
};
