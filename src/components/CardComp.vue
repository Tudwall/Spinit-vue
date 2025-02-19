<template>
  <div class="element">
    <img class="cover-art" src="./icons/Record.svg" alt="" />
    <div class="info">
      <span class="artist">Artist</span>
      <span class="album">Album</span>
      <span class="date">(Date)</span>
    </div>
    <div class="actions">
      <div class="stars">
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-fill.svg" />
        <img src="./icons/Star-outline.svg" />
      </div>
      <div>
        <img class="remove-collection" src="./icons/Remove.svg" alt="" />
        <img class="add-wishlist" src="./icons/Heart-outline.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.element {
  display: flex;
  flex-direction: column;
  flex-basis: 12.5%;
  background-color: #e2edf6;
  border-radius: 25px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2509803922);
}

.element .cover-art {
  background-color: #d9d9d9;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  margin-bottom: 1em;
}

.element .info {
  margin-bottom: 2em;
  padding-right: 0.25em;
  padding-left: 0.25em;
}

.element .actions {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.5em;
}

.element .stars,
.element .add-collection,
.element .add-wishlist {
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2509803922));
}

.element .add-collection,
.element .add-wishlist {
  width: 1em;
}

.element .add-wishlist {
  margin-right: 0.5em;
}
</style>
