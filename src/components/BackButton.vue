<template>
  <main>
    <button
      @click="$router.go(-1)"
      class="focus:outline-none cursor-pointer w-full"
    >
      <img v-if="!orange" src="@/assets/icons/backbutton.svg" alt="" />
      <img v-else src="@/assets/icons/backbuttonorange.svg" alt="" />
    </button>
  </main>
</template>

<script setup>
const props = defineProps({
  orange: {
    type: Boolean,
    default: false,
  },
});
console.log(props.orange);
</script>

<style></style>
