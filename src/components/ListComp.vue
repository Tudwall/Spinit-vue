<script setup>
import { useReleaseStore } from '@/stores/release'
const store = useReleaseStore()
await store.fetchRelease()
const release = store.getRelease
console.log(release)
</script>

<template>
  <ul>
    <li v-for="element in release.tracklist" :key="element.id">
      <span id="side">{{ element.position }}</span> {{ element.title }}
      <span id="duration">{{ element.duration }}</span>
      <div class="stars">
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-outline.svg" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  padding: 1em;
  background-color: lightgray;
  border-radius: 20px;
  max-width: 80%;
}

.stars {
  display: inline;
}

#side {
  background-color: lightslategray;
}

#duration {
  border-right: solid black 1px;
  border-left: solid black 1px;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
