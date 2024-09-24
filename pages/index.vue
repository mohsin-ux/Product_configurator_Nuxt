<script setup lang="ts">
import SearchBlack from "~/icons/searchBlack.vue";
import SearchRed from "~/icons/searchRed.vue";

defineProps<{
  template: string;
}>();

const { currency, selectedPaymentMethod } = useSessionContext();
const { isLoggedIn } = useUser();
</script>

<template>
  <div>
    <div class="px-4 py-6 flex flex-col gap-3">
      <h1 class="text-2xl font-bold">
        1 <span class="text-base font-normal">/12</span> Produktlinie wählen
      </h1>
      <UserInput />
      <ImageMenu />
    </div>

    <Sidebar />
  </div>
</template>
<style scoped></style>
