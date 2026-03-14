import { Car } from "@/types/car";
import { Filters } from "@/types/filters";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CarStore = {
  cars: Car[];
  filters: Filters;
  favorites: string[];
  page: number;

  setCars: (cars: Car[]) => void;
  appendCars: (cars: Car[]) => void;
  setFilters: (filters: Filters) => void;
  setPage: (page: number) => void;
  toggleFavorite: (id: string) => void;
};

export const useCarStore = create<CarStore>()(
  persist(
    (set, get) => ({
      cars: [],
      filters: {},
      favorites: [],
      page: 1,

      setCars: (cars) => set({ cars }),
      appendCars: (cars) =>
        set((state) => ({
          cars: [...state.cars, ...cars],
        })),
      setFilters: (filters) => set({ filters, page: 1, cars: [] }),
      setPage: (page) => set({ page }),
      toggleFavorite: (id) => {
        const { favorites } = get();
        if (favorites.includes(id)) {
          set({ favorites: favorites.filter((f) => f !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
    }),
    {
      name: "favorites-storage",
      partialize: (state) => ({ favorites: state.favorites }),
    },
  ),
);
