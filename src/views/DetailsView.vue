<script setup>
import HeaderComp from '@co/HeaderComp.vue'
import ListComp from '@/components/ListComp.vue'
</script>

<template>
  <HeaderComp />

  <main>
    <Suspense>
      <ListComp />
    </Suspense>
  </main>
</template>
