import apiBase from '../../../shared/config/api/api-base';

export interface IBenefitsList {
  title: string,
  icon: string,
}

export const getBenefitsList = async () => {
  const response = await apiBase.get<{data: IBenefitsList[]}>('/api/benefits');
  return response?.data?.data;
};

