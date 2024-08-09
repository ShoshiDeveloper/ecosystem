<script setup lang="ts">
import ProjectsLayout from '~/components/layouts/projects/ProjectsLayout.vue';
</script>

<template>
    <div>
        <TextHeader 
            :accent="'Проекты'"
            :title="'к которым я когда-либо приложил свои руки'"
            :description="'Каждый проект имеет значение, потому что он даёт определённые знания.'"
        />
        <ProjectsLayout />
    </div>
</template>