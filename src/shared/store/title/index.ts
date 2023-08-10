import create from 'zustand';
import {getTitleList,ITitleList} from "../../api/title";

interface ITitleState {
  titleItem: any;
}

interface ITitles extends ITitleState {
  fetchTitle: (route:string) => Promise<void>;
  reset: () => void;
}

const state = {
  titleItem: null,
};

export const useTitleStore = create<ITitles>((set, get) => ({
  ...state,
  fetchTitle: async (route) => {

    const titlesList = await getTitleList(route);

    console.log(titlesList,'rerserse')
    set({ titleItem: titlesList });
  },

  reset: () => {
    set(state);
  },
}));