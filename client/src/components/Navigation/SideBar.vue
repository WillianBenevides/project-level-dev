<template>
    <aside
        id="default-sidebar"
        class="sticky top-0 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
    >
        <ul class="flex flex-col items-center">
            <li
                v-for="(item, index) in items"
                :key="index"
                class="py-3 px-3 text-right hover:text-green-500"
            >
                <component :is="item.icon" class="h-5 text-gray-600 mx-3" />

                <a :href="item.href" class="group-hover:bg-blue-200">
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    import { SearchIcon } from '@heroicons/vue/outline'; // Troquei o ícone para um ícone de pesquisa
    export default {
        name: 'SideBar',
        components: { SearchIcon }, // Usei o ícone de pesquisa em vez do MagnifyingGlassIcon
        data() {
            return {
                items: [
                    { separator: true },
                    {
                        label: 'Home',
                        icon: 'SearchIcon',
                        href: '/home',
                    },
                    {
                        label: 'Explore',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Notifications',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Messages',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Lists',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Communities',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Premium',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Profile',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'More',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    { separator: true },
                ],
            };
        },
        methods: {},
    };
</script>

<style lang="scss" scoped></style>
