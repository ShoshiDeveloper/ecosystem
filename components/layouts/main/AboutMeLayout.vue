<script setup lang="ts">
import AboutMeStatCard from '../../widgets/main/cards/AboutMeStatCard.vue';

</script>

<template>
    <div class="flex flex-col gap-st-3">
        <h2 class="text-st-t1 font-bold"><span class="text-st-content-brand">Обо</span> мне</h2>
        <div class="flex flex-row gap-4">
            <AboutMeStatCard :title="'1+ год'" :description="'коммерческого года'"/>
            <AboutMeStatCard :title="'2 проекта'" :description="'опубликованны в сторах'"/>
            <AboutMeStatCard :title="'3 пакета'" :description="'разработано для Dart/Flutter'"/>
        </div>
        <p>
        Меня зовут Павел, и я Flutter-разработчик с опытом коммерческой разработчик в один год. Некоммерческий опыт у меня составляет два года.
        <br>Я часто придумываю новые идеи и стараюсь воплотить их в реальность, используя свои знания в разработке мобильных приложений.
        Кроме основного стека на Flutter, я иногда использую Vue3 + Nuxt3 для создания небольших веб-приложений, если возникает такая необходимость.
        <br><br>Кроме программирования, я изучаю японский язык и интересуюсь Японией. Надеюсь когда‑нибудь посетить эту страну.
        </p>
    </div>
</template>../../widgets/main/cards/AboutMeStatCard.vue