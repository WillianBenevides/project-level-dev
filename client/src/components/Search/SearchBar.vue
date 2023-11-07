<template>
    <div class="flex items-center group">
        <button
            type="submit"
            class="bg-gray-50 h-10 rounded-l-full group-hover:bg-white group-hover:border-y-2 group-hover:border-l-2 group-hover:border-blue-400"
        >
            <MagnifyingGlassIcon
                class="h-5 text-gray-600 mx-3 group-hover:text-blue-400"
            />
        </button>
        <input
            class="bg-gray-50 h-10 px-5 pr-16 rounded-r-full text-sm focus:outline-none group-hover:bg-white group-hover:border-y-2 group-hover:border-r-2 group-hover:border-blue-400"
            type="search"
            name="search"
            placeholder="Search"
        />
    </div>
</template>

<script setup>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped></style>
