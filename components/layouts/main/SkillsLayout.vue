<script setup lang="ts">
import DesignSkillsWidget from '~/components/widgets/main/skills/DesignSkillsWidget.vue';
import DevSkillsWidget from '~/components/widgets/main/skills/DevSkillsWidget.vue';

</script>

<template>
    <div class="flex flex-col gap-st-3">
        <h2 class="text-st-t1 font-bold"><span class="text-st-content-brand">Навыки</span> работы</h2>
        <div class="flex flex-col gap-4">
            <DevSkillsWidget />
            <DesignSkillsWidget />
        </div>
    </div>
</template>