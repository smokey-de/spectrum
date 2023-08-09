import apiBase from '../../../shared/config/api/api-base';


export const sendContactForm = async (body: {phone: string, name: string, text:string}) => {
  const response = await apiBase.post('/api/contact', body)
  return response
};

