import create from 'zustand';
import {getBenefitsList,IBenefitsList} from "../../api/benefits";

interface IBenefitsState {
  benefitsList?: IBenefitsList[];
}

interface IBenefits extends IBenefitsState {
  fetchBenefits: () => Promise<void>;
  reset: () => void;
}

const state = {
  benefitsList: [],
};

export const useBenefitsStore = create<IBenefits>((set, get) => ({
  ...state,
  fetchBenefits: async () => {

    const benefitsList = await getBenefitsList();


    if (get().benefitsList?.length) return;
    set({ benefitsList });
  },

  reset: () => {
    set(state);
  },
}));