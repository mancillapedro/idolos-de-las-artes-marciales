<template>
  <section>
    <h1>Peleadores:</h1>
    <ul>
      <li v-for="fighter in allFighters" :key="fighter.id">
        <router-link
          :to="{ name: 'fighter', params: { id: fighter.id } }"
          v-text="fighter.nombre"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "FightersView",
  props: ["allFighters"],
};
</script>

<style scoped>
section {
  width: 100%;
}
h1{
  width: 50%;
  text-align: right;
  padding-bottom: 1rem;
}
ul{
  text-align: left;
  width: max-content;
  margin: 0 auto;
}
</style>