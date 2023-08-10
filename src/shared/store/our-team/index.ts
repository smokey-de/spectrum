import create from 'zustand';
import {getOurTeamList,IOurTeamList} from "../../api/our-team";


interface IOurTeamState {
  ourTeamList?: IOurTeamList[];
}

interface IOurTeam extends IOurTeamState {
  fetchOurTeam: () => Promise<void>;
  reset: () => void;
}

const state = {
  ourTeamList: [],
};

export const useOurTeamStore = create<IOurTeam>((set, get) => ({
  ...state,
  fetchOurTeam: async () => {
    const ourTeamList = await getOurTeamList();

    if (get().ourTeamList?.length) return;
    set({ ourTeamList });
  },

  reset: () => {
    set(state);
  },
}));