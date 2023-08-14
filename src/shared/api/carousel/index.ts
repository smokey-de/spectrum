import apiBase from '../../../shared/config/api/api-base';

export interface ICarouselList {
  id: number,
  title: string,
  image: string,
}

export const getCarouselList = async () => {
  const response = await apiBase.get<{data: ICarouselList}>('/api/slider');
  return response?.data?.data;
};

