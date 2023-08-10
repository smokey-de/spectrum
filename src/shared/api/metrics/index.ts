import apiBase from '../../../shared/config/api/api-base';

export interface IMetrics {
  title: string,
  code: string,
}

export const getMetrics = async () => {
  const response = await apiBase.get<{data: IMetrics[]}>('/api/metrics');
  return response?.data?.data;
};

