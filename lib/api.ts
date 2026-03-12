import { Car } from "@/types/car";
import axios from "axios";

axios.defaults.baseURL = process.env.BACKEND_URL;

interface CarListResponse {
  cars: Car[];
}

export const getCars = async () => {
  const { data } = await axios.get<CarListResponse>("/cars");
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
