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
  data() {
    return {
      oli: true,
    };
  },
  methods: {},
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
  text-decoration: none;
  color: #2c3e50;
}
nav a:hover {
  opacity: 1;
}
nav a.router-link-exact-active {
  opacity: 1;
  cursor: default;
  pointer-events: none;
  color: #42b983;
  /* text-shadow: 0px 0px 16px ; */
}
</style>
