<script setup lang="ts">
interface Props {
    title: string,
    description: string
}

const props = defineProps<Props>();
</script>

<template>
    <div class="bg-st-bg-tertiary rounded-2xl p-4 text-center w-full">
        <h1 class="text-st-content-brand text-st-h1 font-bold mb-4">{{ props.title }}</h1>
        <p>{{ props.description }}</p>
    </div>
</template>