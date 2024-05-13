import { useQuery } from 'react-query';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatforms;
