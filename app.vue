<script setup lang="ts">
const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

