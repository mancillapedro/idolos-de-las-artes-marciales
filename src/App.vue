<template>
  <div id="app">
    <nav>
      <router-link to="/fighters">Peleadores</router-link> |
      <router-link to="/">Buscador</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.d-none {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  opacity: 0.5;
  color: #2c3e50;
}
nav a:hover,
nav a.router-link-exact-active {
  opacity: 1;
  color: #0068da;
}
nav a.router-link-exact-active {
  cursor: default;
  pointer-events: none;
}
</style>
