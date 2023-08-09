import create from 'zustand';
import { getNewsInfo, getNewsList, INewsInfo, INewsList } from '../../api/news';

interface INewsState {
  mainNewList: INewsList[],
  newsInfo: INewsInfo | null,
  newsList: {
    data: INewsList[],
    count: number
  };
}

interface INews extends INewsState {
  fetchNewInfo: (id: number) => Promise<void>;
  fetchNews: (page?: number) => Promise<void>;
  reset: () => void;
}

const state = {
  mainNewList: [],
  newsInfo: null,
  newsList: {
    data: [],
    count: 0,
  },
};

export const useNewsStore = create<INews>((set, get) => ({
  ...state,
  fetchNews: async (page) => {
    const newsList = await getNewsList(page);
    // if (get().newsList?.length) return;
    set({ newsList });
    if (!get().mainNewList?.length) set({ mainNewList: newsList.data });
  },
  fetchNewInfo: async (id) => {
    const newsInfo = await getNewsInfo(id);
    set({ newsInfo });
  },
  reset: () => {
    set(state);
  },
}));