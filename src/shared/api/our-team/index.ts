import apiBase from '../../../shared/config/api/api-base';

export interface IOurTeamList {
  title: string,
  position: string,
  description: string
  photo: string
}

export const getOurTeamList = async () => {
  const response = await apiBase.get<{data: IOurTeamList[]}>('/api/team-members');
  return response?.data?.data;
};

