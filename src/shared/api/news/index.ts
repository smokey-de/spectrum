import apiBase from '../../../shared/config/api/api-base';

export interface INewsList {
    title: string,
    content: string,
    id: number,
    image: string
    publish_date: string
}

export interface INewsInfo {
    id: number
    title: string
    content: string
    image: string
    publish_date: string
    is_published: boolean
    created_at: string
    updated_at: string
}


export const getNewsList = async (page?: number) => {
    const config = {
        params: {page: page || 1, per_page: 9},
    };
    const response = await apiBase.get<{ data: INewsList[], meta: { total: number } }>('/api/news', config);

    return {
        data: response?.data?.data || [],
        count: response?.data?.meta?.total || 0
    };
};


export const getNewsInfo = async (id: number) => {


    const response = await apiBase.get<{ data: INewsInfo }>('/api/news/' + id);

    return response.data?.data

}
