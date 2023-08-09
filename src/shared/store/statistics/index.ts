import create from 'zustand';
import { getStatisticsList, IStatisticsList } from '../../../shared/api/statistics';

interface IPartnersState {
  statisticsList?: IStatisticsList[];
}

interface IPartners extends IPartnersState {
  fetchStatistics: () => Promise<void>;
  reset: () => void;
}

const state = {
  statisticsList: [],
};

export const useStatisticsStore = create<IPartners>((set, get) => ({
  ...state,
  fetchStatistics: async () => {
    const statisticsList = await getStatisticsList();

    if (get().statisticsList?.length) return;
    set({ statisticsList });
  },

  reset: () => {
    set(state);
  },
}));