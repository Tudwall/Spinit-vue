<script setup></script>

<template>
  <ul>
    <li>1A</li>
    <li>Titre piste</li>
    <li id="length">4:11</li>
    <li>
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
  flex-direction: row;
  gap: 1em;
  padding: 1em;
  background-color: lightgray;
  border-radius: 20px;
  max-width: 80%;
}

li:nth-child(1) {
  background-color: lightslategray;
}

#length {
  border-right: solid black 1px;
  border-left: solid black 1px;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
