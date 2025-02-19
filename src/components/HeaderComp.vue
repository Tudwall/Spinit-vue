<template>
  <header class="shadow">
    <div class="shadow header-wrapper">
      <img src="./icons/Burger.svg" class="menu-icon burger" />
      <a href="index.html" aria-label="Accueil" class="logo"
        ><picture>
          <source srcset="./icons/SpinIn-Mobile.svg" media="(max-width:600px)" />
          <img src="./icons/SpintIt-lineson.svg" alt="Logo de SpinIt!" />
        </picture>
      </a>

      <form>
        <input
          type="text"
          placeholder="recherche..."
          name="search"
          aria-label="Barre de recherche"
        />
        <div id="search-filters">
          <ul>
            <li>
              <input type="checkbox" id="artists" name="artists" value="artists" /><label
                for="artists"
                >Artistes</label
              >
            </li>
            <li>
              <input type="checkbox" id="albums" name="albums" value="albums" /><label for="albums"
                >Albums</label
              >
            </li>
            <li>
              <input type="checkbox" id="songs" name="songs" value="songs" /><label for="songs"
                >Morceaux</label
              >
            </li>
          </ul>
        </div>
      </form>

      <div class="menus">
        <img
          src="./icons/Magnifier.svg"
          aria-label="Barre de recherche"
          class="menu-icon search-icon"
        />

        <div class="dropdown">
          <img src="./icons/Notification-bell.svg" class="menu-icon" id="notification-icon" />
          <div id="notification-dropdown" class="dropdown-content">
            <p>Aucune notification</p>
          </div>
        </div>

        <div class="dropdown">
          <img src="./icons/User.svg" class="menu-icon" id="user-icon" />
          <div id="user-dropdown" class="dropdown-content">
            <a href="../src/pages/profile.html">Profil</a>
            <a href="../src/pages/collection.html">Collection</a>
            <a href="../src/pages/wishlist.html">Liste de souhait</a>
            <a href="../src/pages/preferences.html">Préférences</a>
            <a href="#">Se déconnecter</a>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#">Populaires</a></li>
        <li><a href="#">Récent</a></li>
        <li><a href="#">Artistes</a></li>
        <li><a href="#">Albums</a></li>
        <li><a href="#">Communauté</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #ededed;
  z-index: 99;
}

header div form {
  width: 100%;
  display: flex;
  justify-content: center;
}

header div form img {
  height: 2em;
}

header div form input[type='text'] {
  font-family: 'Montserrat', serif;
  border: none;
  box-shadow: inset 2.75px 2.75px 7px rgba(0, 0, 0, 0.2509803922);
  width: 33%;
  border-radius: 50px;
  padding: 1%;
  background-color: #fbe6bd;
  position: relative;
  display: inline-block;
}

header div form input[type='text']:focus {
  outline: 0;
}

header div form input[type='text']:focus + #search-filters {
  display: block;
}

header div form #search-filters {
  display: none;
  font-family: 'Montserrat', serif;
  position: absolute;
  background-color: #fbe6bd;
  border: none;
  box-shadow: inset 2.75px 2.75px 7px rgba(0, 0, 0, 0.2509803922);
  padding: 1%;
  border-radius: 25px;
  width: 28.5%;
  top: 10.5%;
}

header div form #search-filters ul {
  display: flex;
  flex-direction: column;
}

header div a > picture > img {
  height: 7em;
  float: left;
}

nav {
  font-family: 'Fira Sans', serif;
  font-size: 1.25em;
  height: 2em;
}

nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding-top: 0.15%;
}

nav ul li {
  text-align: center;
  list-style-type: none;
  flex-grow: 1;
}

nav ul li a {
  color: #474747;
  text-decoration: none;
  align-items: center;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1%;
}

.menus {
  display: flex;
  flex-direction: row;
  gap: 1em;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown .menu-icon {
  height: 2em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2509803922));
}

.dropdown .menu-icon:hover {
  cursor: pointer;
}

.dropdown .dropdown-content {
  display: none;
  flex-direction: column;
  gap: 0.5em;
  position: absolute;
  background-color: #fbe6bd;
  box-shadow: inset 2.75px 2.75px 7px rgba(0, 0, 0, 0.2509803922);
  padding: 1em;
  border-radius: 25px;
  z-index: 99;
  left: -100px;
}

.dropdown .dropdown-content a {
  text-decoration: none;
  color: black;
}

.dropdown .dropdown-content a:hover {
  text-decoration: underline;
}

.dropdown .show {
  display: flex;
}

.search-icon {
  display: none;
}

.burger {
  display: none;
}

@media screen and (max-width: 600px) {
  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  header nav {
    display: none;
  }
  header .header-wrapper {
    display: flex;
    justify-content: space-between;
    float: none;
  }
  header .header-wrapper a {
    width: 30%;
  }
  header .header-wrapper a picture img {
    height: auto;
  }
  header .header-wrapper form {
    display: none;
  }
  .search-icon {
    display: block;
    padding-right: 0.25em;
  }
  .notification-menu,
  .account-menu {
    display: none;
  }
  .burger {
    display: block;
    padding-left: 0.25em;
  }
}
</style>
