<script setup lang="ts">
import Experience from '~/components/widgets/main/experience/Experience.vue';

const experience = [
    {
        company: 'К-Телеком',
        position: 'Flutter-developer',
        description: 'Занимаюсь разработкой системы умного дома, а именно мобильного приложения. Сначала я был один и делал приложение с нуля, но потом у меня появился помощник, с которым мы значительно ускорились.',
        whatDo: ['Проектирование архитектуры мобильного приложения', 'Разработка мобильного приложения', 'Релиз-менеджмент', 'Ведение страниц в PlayMarket и AppStore', 'Управление подкомандой мобильной разработки', 'Менторство'],
        stack: ['Flutter', 'Hive', 'BLoC', 'Fl_Charts', 'DIO', 'Sockets'],
        work: 'Июль 2023 - Сейчас'
    },
    {
        company: 'ShokoTeam',
        position: 'TeamLead',
        description: 'Создал и управляю командой молодых интузиастов, которым интересен IT. Разрабатываем самые разные проекты, например, Fores.',
        whatDo: ['Управление командой', 'Разработка технических заданий по проектам', 'Разработка мобильных и веб- приложений', 'Ведение соц.сетей'],
        stack: ['Flutter', 'Vue3 + Nuxt3'],
        work: 'Апр. 2022 - Сейчас'
    }
];

</script>

<template>
    <div class="flex flex-col gap-st-3">
        <h2 class="text-st-t1 font-bold"><span class="text-st-content-brand">Опыт</span> работы</h2>
        <div class="flex flex-col gap-4">
            <Experience v-for="item in experience" :exp="item"/>
        </div>
    </div>
</template>
