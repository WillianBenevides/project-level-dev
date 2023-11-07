<script setup lang="ts">
    import ShowTrending from './components/Trending/ShowTrending.vue';
    import SearchBar from './components/Search/SearchBar.vue';
    import ShowPosts from './components/Posts/ShowPosts.vue';
    import Sidebar from './components/Navigation/SideBar.vue';
</script>

<template>
    <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
    />
    <main class="grid grid-cols-3 grid-rows-1 gap-1">
        <Sidebar />
        <router-view />
        <div class="flex-1 mx-auto max-w-7xl my-4">
            <SearchBar class="my-4" />
            <div class="max-w-sm rounded-lg overflow-hidden bg-gray-50">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >#photography</span
                    >
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >#travel</span
                    >
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >#winter</span
                    >
                </div>
            </div>
            <ShowTrending class="my-4" />
        </div>
    </main>
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
