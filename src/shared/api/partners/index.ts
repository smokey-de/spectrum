import apiBase from '../../../shared/config/api/api-base';

export const getPartnersList = async () => {
  const config = {
    headers: {"Accept-Language": localStorage.getItem('language') || 'ru'}
  };
  const response = await apiBase.get<{data: {logo: string}[]}>('/api/partners',config);
  return response?.data?.data;
};

