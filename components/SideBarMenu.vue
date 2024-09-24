<script setup lang="ts">
defineProps<{
  showMenu: Boolean;
}>();
const products = [
  "Produktlinie",
  "Front",
  "Korpus",
  "Glastür",
  "Glasart",
  "Griff",
  "Griffposition",
  "Türanschlag",
  "Auszug",
  "Fußhöhe",
  "Optionale Ausstattung",
  "Maße",
];
</script>

<template>
  <div class="p-5 bg-Beige rounded-t-3xl w-full pb-12 bg-kitchenz" :class="{ hidden: !showMenu }">
    <div class="flex justify-center">
      <span class="w-10 h-1 bg-dark_grey rounded items-center"></span>
    </div>

    <div
      v-for="(product, index) in products"
      class="py-2 border-b border-Beige_Dark"
    >
      <button class="text-grey_text text-sm">{{ index + 1 }}. {{ product }}</button>
    </div>
  </div>
</template>
