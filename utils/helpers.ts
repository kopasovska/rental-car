import { Car } from "@/types/car";

export const checkSubset = (parentArray: Car[], subsetArray: Car[]) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};
