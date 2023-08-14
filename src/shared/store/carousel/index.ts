import create from 'zustand';
import {getCarouselList} from "../../api/carousel";


interface ICarouselState {
  carouselList: any;
}

interface ICarousel extends ICarouselState {
  fetchCarousel: () => Promise<void>;
  reset: () => void;
}

const state = {
  carouselList: [],
};

export const useCarouselStore = create<ICarousel>((set, get) => ({
  ...state,
  fetchCarousel: async () => {
    const carouselList = await getCarouselList();

    if (get().carouselList?.length) return;
    set({ carouselList });
  },

  reset: () => {
    set(state);
  },
}));