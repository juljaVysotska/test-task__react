// Core
import { useQuery } from 'react-query';

// API
import { api } from '../api';

export const useProfile = () => {
    const query = useQuery('profile', api.profile.fetch);
    const { data, isFetched, refetch } = query;

    return {
        data,
        isFetched,
        refetch,
    };
};
