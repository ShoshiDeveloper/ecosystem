<script setup lang="ts">
import type { ExperienceType } from '~/lib/ExperienceType';

interface Props {
    exp: ExperienceType
}

const props = defineProps<Props>();
</script>


<template>
    <div class="flex flex-row justify-between pb-4">
        <p class="text-st-content-secondary">{{ props.exp.work }}</p>
        <div class="max-w-[700px] w-full flex flex-col gap-6 border-l-2 border-st-content-brand px-4">
            <div class="">
                <p class="text-st-t1 font-bold text-st-content-brand">
                    {{ props.exp.company }}
                </p>
                {{ props.exp.position }}
            </div>
            <div class="">
                <p class="text-st-b1 font-medium text-st-content-brand mb-1">Описание</p>
                {{ props.exp.description }}
            </div>
            <div class="">
                <p class="text-st-b1 font-medium text-st-content-brand mb-1">Что делал</p>
                <lu>
                    <li v-for="item in props.exp.whatDo">
                        {{ item }}
                    </li>
                </lu>
            </div>
            <div class="">
                <p class="text-st-b1 font-medium text-st-content-brand mb-1">Стэк</p>
                <lu>
                    <li v-for="item in props.exp.stack">
                        {{ item }}
                    </li>
                </lu>
            </div>

        </div>
    </div>
</template>