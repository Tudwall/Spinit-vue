<template>
  <img src="../assets/images/background.jpg" aria-hidden="true" class="background-image" />
  <p>
    Lorem ipsum dolor sit amet consectetur. Volutpat vestibulum nunc duis ornare congue sit. Nec
    vitae et feugiat.
  </p>
  <a href="../src/pages/signup.html">
    <button class="cta" id="cta-btn">Rejoins-nous !</button>
  </a>
</template>

<style scoped>
main section {
  padding-left: 1em;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2509803922);
  padding-bottom: 1em;
}

main {
  position: relative;
  text-align: center;
}

main p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  color: #ededed;
  text-shadow: 0 4px 6px black;
  font-size: 2em;
  padding: 5%;
}

main .cta {
  font-family: 'Montserrat', serif;
  background-color: #d9d9d9;
  border-radius: 50px;
  padding: 1em;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2509803922);
  border: 0;
  position: absolute;
  top: 70%;
  left: 42.5%;
  width: 15%;
}

main .cta a {
  text-decoration: none;
  color: #474747;
}

main .cta:hover {
  background-color: rgb(191.5, 191.5, 191.5);
  cursor: pointer;
}

main .cta:active {
  background-color: #a6a6a6;
  transform: scale(0.9);
}

main img {
  width: 100%;
}

@media screen and (max-width: 600px) {
  main {
    background-color: #ededed;
    padding-bottom: 1em;
  }
  main img {
    display: none;
  }
  main p {
    position: static;
    transform: none;
    background-color: transparent;
  }
  main .cta {
    position: static;
    width: auto;
  }
}
</style>
