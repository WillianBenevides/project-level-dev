import { createRouter, createWebHistory } from 'vue-router';
import ShowPosts from '@/components/Posts/ShowPosts.vue';
import ShowComments from '@/components/Posts/ShowComments.vue';
const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'Home',
        component: ShowPosts,
    },
    {
        path: '/posts/:id',
        name: 'Comments',
        component: ShowComments,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
