import apiBase from '../../../shared/config/api/api-base';

export interface IStatisticsList {
  title: string,
  icon: string,
  value: string
}

export const getStatisticsList = async () => {
  const response = await apiBase.get<{data: IStatisticsList[]}>('/api/statistic');
  return response?.data?.data;
};

