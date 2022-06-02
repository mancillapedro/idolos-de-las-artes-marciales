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
  props: ['allFighters'],
  // data: function () {
  //   return {
  //     fighters: null,
  //   };
  // },
  // computed: {},
  // methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // created() {
  //   this.fighters = require("@/assets/peleadores.json");
  // },
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>