<script setup lang="ts">
</script>

<template>
    <div class="border-st-content-secondary border-t-[0.2px] flex justify-between py-8 mt-4">
        <div class="flex gap-3">
            <RouterLink :to="'/'" class="text-st-b2 text-st-content-secondary">Главная</RouterLink>
            <RouterLink :to="'/projects'" class="text-st-b2 text-st-content-secondary">Проекты</RouterLink>
            <RouterLink :to="'/resume'" class="text-st-b2 text-st-content-secondary">Резюме</RouterLink>
        </div>
        <p class="text-st-b2 text-st-content-secondary">© 2024 <a href="https://t.me/shoshikanda">Павел Лобачев</a>. Все права защищены.</p>
    </div>
</template>