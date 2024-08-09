<script setup lang="ts">
  import FooterLayout from './components/layouts/main/FooterLayout.vue';
</script>

<template>
  <div class="py-[24px] bg-[#18181B] min-h-screen text-white font-mplus px-[24px] xl:px-[256px]">
    <Menu />
    <div class="pt-[64px]">
      <NuxtPage />
      <FooterLayout />
    </div>
  </div>
</template>
