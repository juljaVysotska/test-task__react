// Core
import { useQuery }  from 'react-query';

// API
import { api }  from '../api';

export const usePosts = () => {
    const query = useQuery('posts', api.posts.fetch);
    const { data, isFetched } = query;

    return {
        data: data?.data || [],
        isFetched,
    };
};
