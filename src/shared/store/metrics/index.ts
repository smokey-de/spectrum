import {getMetrics,IMetrics as IMetricsList} from "../../api/metrics";
import create from "zustand";

interface IMetricsState {
  metricsList?: IMetricsList[];
}

interface IMetrics extends IMetricsState {
  fetchMetrics: () => Promise<void>;
  reset: () => void;
}

const state = {
  metricsList: [],
};

export const useMetricsStore = create<IMetrics>((set, get) => ({
  ...state,
  fetchMetrics: async () => {

    const metricsList = await getMetrics();


    if (get().metricsList?.length) return;
    set({ metricsList });
  },

  reset: () => {
    set(state);
  },
}));