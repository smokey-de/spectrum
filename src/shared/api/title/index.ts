import apiBase from '../../../shared/config/api/api-base';

export interface ITitleList {
  title: string,
  route: string,
  description: string,
}

export const getTitleList = async (route: string) => {
  const response = await apiBase.get<{data: ITitleList}>(`/api/title/${route.replace('/','')}`);
  return response?.data?.data;
};

