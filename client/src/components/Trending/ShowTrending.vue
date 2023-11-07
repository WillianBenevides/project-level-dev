<template>
    <div class="py-4 mt-4 max-w-sm rounded-lg overflow-hidden bg-gray-50">
        <p class="px-6 text-lg font-bold">What's happening</p>
        <div v-for="post in posts" :key="post.id" class="group">
            <div class="mx-auto max-w-7xl group-hover:bg-gray-200 px-6 py-4">
                <a class="">
                    {{ post.title }}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { getPosts } from '@/http.ts';
    import { defineComponent } from 'vue';
    import Post from './Post';
    export default defineComponent({
        name: 'ShowPost',
        components: {},
        data: function () {
            return {
                posts: [] as Post[],
                loading: true,
            };
        },
        methods: {
            async loadPosts() {
                const response = await getPosts();
                this.posts = response;

                return this.posts;
            },
        },
        async mounted() {
            this.loading = true;
            this.loadPosts();
            this.loading = false;
        },
    });
</script>
