import { getStoragesListUser, postStorages } from '@/service/storage';
import { IStorageBase } from '@/types/storage';
import { queryOptions, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const userStorageOptions = (userId: number) =>
  queryOptions({
    queryKey: ['storage', 'list', { type: 'user', id: userId }] as const,
    queryFn: ({ queryKey }): Promise<IStorageBase[]> => getStoragesListUser(queryKey[2].id),
  });

export const useUserStorageList = (userId: number) => useQuery(userStorageOptions(userId));

export const useCreateStorage = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: postStorages,
    onSettled: async () => {
      client.invalidateQueries({ queryKey: ['storage', 'list'] });
    },
  });
};
