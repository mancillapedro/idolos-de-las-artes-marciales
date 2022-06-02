<template>
  <div>
    <template v-if="fighter">
      <h2>¡Peleador encontrado!</h2>
      <h1 v-text="fighter.nombre" />
    </template>
    <h2 v-else>El peleador que buscas no existe :c</h2>
  </div>
</template>

<script>
export default {
  name: "FighterView",
  props: ["fighter"],
  //   data: function () {
  //     // return {
  //     //   fighter: null,
  //     // };
  //   },
  //   computed: {},
  //   methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  //   created() {
  //     const fighters = require("@/assets/peleadores.json");
  //     this.fighter = fighters.find((fighter) => fighter.id == this.id);
  //   },
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>