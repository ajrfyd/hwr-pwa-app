import { useMutation } from '@tanstack/react-query';
import { createUser } from '../api/user';
import { useMutationCustomOptions } from '@/types/common';
import { saveTokenResponseType } from '@/types/user';

const useMutateCreateUser = (
  mutationOptions?: useMutationCustomOptions<saveTokenResponseType>
) =>
  useMutation({
    mutationFn: createUser,
    ...mutationOptions
  });

export default useMutateCreateUser;
