import apiBase from '../../../shared/config/api/api-base';

export const getPartnersList = async () => {
  const response = await apiBase.get<{data: {logo: string}[]}>('/api/partners');
  return response?.data?.data;
};

