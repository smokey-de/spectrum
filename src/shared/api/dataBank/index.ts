import apiBase from '../../../shared/config/api/api-base';
export interface IBankDate {
  date: string
}
export const getBankDate = async () => {
  const response = await apiBase.get<{data:IBankDate[]}>('/api/bank');
  return response?.data?.data;
};
