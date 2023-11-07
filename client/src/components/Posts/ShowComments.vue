<template>
    <div class="bg-white flex-1" v-if="!loading">
        <article
            href="#"
            class="flex max-w-xl flex-col items-start justify-between lg:px-8 mx-auto px-6 lg:px-8 group-hover:bg-gray-100 border-y py-4"
        >
            <div class="relative mt-8 flex items-center gap-x-4">
                <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            Michael Foster
                        </a>
                    </p>
                    <p class="text-left text-gray-600">@michael.foster</p>
                </div>
            </div>
            <div class="group relative">
                <h3
                    class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                >
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        {{ post.title }}
                    </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {{ post.body }}
                </p>
            </div>
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="{{ post.created_at }}" class="text-gray-500">
                    {{ post.created_at }}
                </time>
            </div>
        </article>

        <article
            v-for="comment in post.comments"
            :key="comment.postId"
            class="flex max-w-xl flex-col items-start justify-between lg:px-8 mx-auto px-6 lg:px-8 group-hover:bg-gray-100 border-y py-4"
        >
            <div class="relative mt-8 flex items-center gap-x-4">
                <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm flex">
                    <p class="font-semibold text-gray-900 mx-2">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            Michael Foster
                        </a>
                    </p>
                    <p class="text-left text-gray-600">@michael.foster</p>
                </div>
            </div>
            <div class="group relative">
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {{ comment.content }}
                </p>
            </div>
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="{{ comment.created_at }}" class="text-gray-500">
                    {{ comment.created_at }}
                </time>
            </div>
        </article>
        <textarea
            type="areatext"
            placeholder="Post your reply"
            name="content"
            v-model="newComment.content"
            class="mt-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <div class="flex justify-end">
            <button
                class="my-4 mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                @click="createComment"
            >
                Reply
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Post from './Post';
    import { getPost, createComment } from '@/http.ts';

    export default defineComponent({
        name: 'ShowComments',
        components: {},
        data: function () {
            return {
                post: {} as Post,
                newComment: { content: '', post_id: this.$route.params.id },
                loading: true,
            };
        },
        methods: {
            async loadPost() {
                const response = await getPost(this.$route.params.id);
                this.post = response;
                return this.post;
            },
            async createComment() {
                await createComment(this.newComment);
                this.init();
            },
            async init() {
                this.loading = true;
                this.loadPost();
                this.loading = false;
            },
        },
        async mounted() {
            this.init();
        },
    });
</script>
