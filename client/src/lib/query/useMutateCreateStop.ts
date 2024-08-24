import { useMutation } from '@tanstack/react-query';
import { createStop } from '../api/stop';
import { ResponseCreateStop } from '@/types/stop';
import { useMutationCustomOptions } from '@/types/common';
import notify from '../utils/notify';
import client from '.';
import querykeys from './queryKeys';

const useMutateCreateStop = (
  // stop: CreateStopType,
  mutationOptions: useMutationCustomOptions<ResponseCreateStop>
) =>
  useMutation({
    mutationFn: createStop,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [querykeys.REQ_STOP_ALL] });
      notify('성공!');
    },
    ...mutationOptions
  });

export default useMutateCreateStop;
