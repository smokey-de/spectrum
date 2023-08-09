import create from 'zustand';
import { getBankDate,IBankDate as IBankDateProp } from '@/shared/api/dataBank';

interface IBankDateState {
  bankDate?: IBankDateProp[];
}

interface IBank extends IBankDateState {
  fetchBankData: () => Promise<void>;
  reset: () => void;
}

const state = {
  bankDate: [],
};

export const useBankDataStore = create<IBank>((set, get) => ({
  ...state,
  fetchBankData: async () => {
    const bankDate = await getBankDate();

    if (get().bankDate?.length) return;
    set({ bankDate });
  },

  reset: () => {
    set(state);
  },
}));