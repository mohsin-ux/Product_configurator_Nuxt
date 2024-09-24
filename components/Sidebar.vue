<script setup lang="ts">
const showMenu = ref<boolean>(false);
function toggleShowMenu() {
  showMenu.value = !showMenu.value;
  console.log(showMenu.value);
}
</script>

<template>
  <div class="max-sm:sticky bottom-0 bg-Beige">
    <SideBarMenu :showMenu="showMenu" />

    <div class="sm:p-4 ">
      <button
        @click="toggleShowMenu"
        class="w-full py-3 sm:p-2 bg-Beige sm:bg-white flex flex-col gap-2 justify-center items-center max-sm:rounded-t-2xl"
        :class="{ 'bg-white': showMenu }"
      >
        <div  
          class="w-10 h-1 bg-dark_grey rounded sm:hidden"
          :class="{ hidden: showMenu }"
        ></div>
        <p class="text-sm font-medium">Aktuelle Konfiguration: <span class="font-bold">€</span> <span class="text-lg font-bold">404,88</span> </p>
      </button>
      <div
        class="bg-dark_grey p-5 sm:p-2 text-white text-base font-medium flex justify-center items-center"
      >
        Weiter mit Front
      </div>
    </div>
  </div>
</template>
