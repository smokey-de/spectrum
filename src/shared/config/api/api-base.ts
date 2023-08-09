import axios, { AxiosError } from 'axios';
import {API_BASE} from "../../lib/constants";



const apiBase = axios.create({
  baseURL: API_BASE,
});

apiBase.interceptors.request.use((config) => {
  // const authToken = Cookies.get(TOKEN.AUTH_TOKEN);
  // config.headers['Fcm-Token'] = 'test';
  // config.headers['Accept-Language'] =  localStorage.getItem('language') || 'ru';
  // config.headers['authorization'] = `Bearer ${authToken}`;

  return config;
});

apiBase.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    // notifyError(error.message);

    const errorStatus = error?.response?.status;

    if (errorStatus === 401) {
      return error.response;
    } else throw error;
    // return error;
  },
);

// eslint-disable-next-line import/no-default-export
export default apiBase;
