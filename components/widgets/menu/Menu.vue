<script setup lang="ts">
import { useRouter } from 'vue-router';

const route = useRouter();
</script>

<template>
    <div class="flex flex-row gap-6 px-[32px] py-[16px] bg-[#252529] w-min rounded-[16px] m-auto text-white font-mplus text-st-b1 font-bold sticky top-[24px]">
        <RouterLink to="/" :class="{
            active:route.currentRoute.value.path == '/'
        }">Главная</RouterLink>
        <RouterLink to="/projects" :class="{
            active:route.currentRoute.value.name == 'projects'
        }">Проекты</RouterLink>
        <RouterLink to="/resume" :class="{
            active:route.currentRoute.value.name == 'resume'
        }">Резюме</RouterLink>
        <!-- <RouterLink to="/blog" :class="{
            active:route.currentRoute.value.name == 'blog'
        }">Блог</RouterLink>
        <RouterLink to="/links" :class="{
            active:route.currentRoute.value.name == 'links'
        }">Ссылки</RouterLink>
        <RouterLink to="/contacts" :class="{
            active:route.currentRoute.value.name == 'contacts'
        }">Контакты</RouterLink> -->
    </div>
</template>

<style scoped>
    .active {
        color: #FF4848;
    }
</style>