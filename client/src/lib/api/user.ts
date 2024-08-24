import { saveTokenResponseType } from '@/types/user';
import apiInstance from './axiosInstance';

export const createUser = async (
  token: string
): Promise<saveTokenResponseType> => {
  const result = await apiInstance.post('/users', {
    token
  });
  return result.data;
};
