<script setup lang="ts">
import AboutMeLayout from '~/components/layouts/main/AboutMeLayout.vue';
import ExperienceLayout from '~/components/layouts/main/ExperienceLayout.vue';
import HeaderLayout from '~/components/layouts/main/HeaderLayout.vue';
import SkillsLayout from '~/components/layouts/main/SkillsLayout.vue';


</script>

<template>
    <div class="flex flex-col gap-[48px]">
        <HeaderLayout />
        <AboutMeLayout />
        <SkillsLayout />
        <ExperienceLayout />
    </div>
</template>