<script setup lang="ts">
const showMenu = ref<boolean>(false);
function toggleShowMenu() {
  showMenu.value = !showMenu.value;
  console.log(showMenu.value);
}
</script>

<template>
  <div class="sticky bottom-0">
    <SideBarMenu :showMenu="showMenu" />
    <button
    @click="toggleShowMenu"
    class="w-full py-3 bg-Beige flex flex-col gap-2 justify-center items-center rounded-t-2xl"
    :class="{ 'bg-white': showMenu }"
    >
    <div class="w-10 h-1 bg-dark_grey rounded" :class="{'hidden': showMenu}"></div>
      <p>Aktuelle Konfiguration: € 404,88</p>
    </button>
    <div class="bg-dark_grey p-5 text-white flex justify-center items-center">
      Weiter mit Front
    </div>
  </div>
  </template>
