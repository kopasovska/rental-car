import { Car } from "@/types/car";
import { Filters } from "@/types/filters";

export type CarStore = {
  cars: Car[];
  favorites: string[];
  filters: Filters;
  page: number;
  isLoading: boolean;

  setFilters: (filters: Filters) => void;
  fetchCars: () => Promise<void>;
  loadMore: () => Promise<void>;
  toggleFavorite: (id: string) => void;
  resetCars: () => void;
};
