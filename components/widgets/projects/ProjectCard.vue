<script setup lang="ts">
import AppStore from '~/components/icons/companies/AppStore.vue';
import Browser from '~/components/icons/companies/Browser.vue';
import Github from '~/components/icons/companies/Github.vue';
import PlayMarket from '~/components/icons/companies/PlayMarket.vue';
import type { ProjectType } from '~/lib/ProjectType';

interface Props {
    project: ProjectType
}

const props = defineProps<Props>();
</script>

<template>
    <div class="flex gap-4 rounded-2xl bg-st-bg-tertiary p-4">
        <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-2">
                <h1 class="text-st-t1 font-bold">{{ props.project.name }}</h1>
                <p class="text-st-b1">{{ props.project.description }}</p>
                <div class="flex flex-wrap gap-2 mt-2">
                    <Badge v-for="item in props.project.stack" :content="item" />
                </div>
            </div>
            <div v-if="props.project.links != null" class="flex flex-wrap gap-2">
                <Badge v-if="props.project.links?.playmarket != null" :content="{
                    'content': 'PlayMarket',
                    'link':props.project.links!.playmarket
                }" ><PlayMarket/> </Badge>
                <Badge v-if="props.project.links?.appstore != null" :content="{
                    'content': 'AppStore',
                    'link': props.project.links!.appstore
                }" ><AppStore/> </Badge>
                <Badge v-if="props.project.links?.web != null" :content="{
                    'content': 'Web',
                    'link':props.project.links!.web
                }" ><Browser/> </Badge>
                <Badge v-if="props.project.links?.github != null" :content="{
                    'content': 'GitHub',
                    'link':props.project.links!.github
                }" ><Github/> </Badge>
            </div>

        </div>
        <div class="w-full text-st-c bg-st-bg-secondary rounded-2xl text-center">
            <p>Image soon...</p>
        </div>
    </div>
</template>