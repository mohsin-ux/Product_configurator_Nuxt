<script setup lang="ts">
// import SearchBlack from "~/icons/searchBlack.vue";
// import SearchRed from "~/icons/SearchRed.vue";

defineProps<{
  template: string;
}>();

// const { currency, selectedPaymentMethod } = useSessionContext();
// const { isLoggedIn } = useUser();
</script>

<template>
  <div
    class="flex justify-center items-center sm:h-screen sm:bg-main max-sm:content"
  >
    <div class="sm:flex sm:max-w-5xl sm:max-h-[672px] bg-white">
      <div class="px-4 py-6 flex flex-col gap-3">
        <h1 class="text-2xl font-bold">
          1 <span class="text-base font-normal">/12</span> Produktlinie wählen
        </h1>
        <UserInput />
        <ImageMenu />
      </div>

      <Sidebar />
    </div>
  </div>
</template>
<style scoped></style>
