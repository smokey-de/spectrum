import create from 'zustand';
import {getTitleList} from "../../api/title";

interface ITitleState {
  titleItem: any;
}

interface ITitles extends ITitleState {
  fetchTitle: (route:string) => Promise<void>;
  reset: () => void;
}

const state = {
  titleItem: {},
};

export const useTitleStore = create<ITitles>((set, get) => ({
  ...state,
  fetchTitle: async (route) => {

    const titleItem = await getTitleList(route);

    set({ titleItem });
  },

  reset: () => {
    set(state);
  },
}));