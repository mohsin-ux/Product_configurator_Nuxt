<script setup lang="ts">
const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
  <!-- <div id="app">
    <Frontends template="Blank Vue 3 template (Nuxt)" />
  </div> -->
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

