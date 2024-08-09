<script setup lang="ts">
import type { BadgeType } from '~/lib/BadgeType';

interface Props {
    content: BadgeType
}
const props = defineProps<Props>();
</script>

<template>
    <div class="px-4 py-1 bg-st-bg-secondary rounded-full w-min text-st-b2 text-st-content-secondary hover:text-white hover:bg-st-content-brand whitespace-nowrap flex gap-2">
        <slot />
        <a v-if="props.content.link != null" :href="props.content.link">
            {{ props.content.content }}
        </a>
        <p v-else>
            {{ props.content.content }}
        </p>
    </div>
</template>