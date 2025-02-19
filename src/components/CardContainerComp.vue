<script setup>
import CardComp from './CardComp.vue'
</script>

<template>
  <section>
    <div class="wrapper">
      <CardComp />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.5 em;
}
</style>
