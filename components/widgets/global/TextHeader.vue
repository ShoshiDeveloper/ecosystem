<script setup lang="ts">
interface Props {
    accent: string,
    title: string,
    description: string
}


const props = defineProps<Props>()
</script>

<template>
    <div class="w-[680px]">
        <h1 class="text-st-h1 font-bold"><span class="text-st-content-brand">{{accent}}</span>, {{ title }}</h1>
        <p class="text-st-b1 text-st-content-secondary mt-[12px]">{{ description }}</p>
    </div>
</template>