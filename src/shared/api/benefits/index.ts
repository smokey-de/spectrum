import apiBase from '../../../shared/config/api/api-base';

export interface IBenefitsList {
  title: string,
  icon: string,
}

export const getBenefitsList = async () => {
  const config = {
    headers: {"Accept-Language": localStorage.getItem('language') || 'ru'}
  };
  const response = await apiBase.get<{data: IBenefitsList[]}>('/api/benefits',config);
  return response?.data?.data;
};

