import apiInstance from './axiosInstance';
import { type CreateStopType, type ResponseCreateStop } from '@/types/stop';

export const createStop = async (
  stop: CreateStopType
): Promise<ResponseCreateStop> => {
  const result = await apiInstance.post<ResponseCreateStop>('/stops', stop);
  return result.data;
};
