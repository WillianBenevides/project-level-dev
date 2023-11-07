import { create } from 'apisauce';
import Post from './components/Posts/Post';

const api = create({
    baseURL: 'http://localhost:3000',
    headers: { Accept: 'application/json' },
});
const getPosts = async () =>
    await api.get('/posts').then(async (response) => {
        const data = (await response.data) as Post[];
        const formattedData: Post[] = [];
        for (const post of data) {
            formattedData.push(new Post(post));
        }
        return formattedData;
    });
const getPost = async (id: string) => {
    const response = await api.get(`/posts/${id}`).then(async (response) => {
        return response.data as Post;
    });
    return response;
};
const createPost = async (params: { title: string; body: string }) => {
    await api.post('/posts', params);
};
const createComment = async (params: { content: string; post_id: string }) => {
    await api.post('/comments', params);
};
export { getPosts, createPost, getPost, createComment };
