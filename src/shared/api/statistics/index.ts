import apiBase from '../../../shared/config/api/api-base';

export interface IStatisticsList {
  title: string,
  icon: string,
  value: string
}

export const getStatisticsList = async () => {
  const config = {
    headers: {"Accept-Language": localStorage.getItem('language') || 'ru'}
  };
  const response = await apiBase.get<{data: IStatisticsList[]}>('/api/statistic',config);
  return response?.data?.data;
};

