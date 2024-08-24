import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions
} from '@tanstack/react-query';

export type useQueryCustomOptions<
  TQueryFnData = unknown,
  TData = TQueryFnData
> = Omit<UseQueryOptions<TQueryFnData, any, TData, QueryKey>, 'queryKey'>;

export type useMutationCustomOptions<
  TData = unknown,
  TVariables = unknown
> = Omit<UseMutationOptions<TData, any, TVariables, unknown>, 'useMutationFn'>;
