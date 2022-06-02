<template>
  <form @submit.prevent="getFighter">
    <fieldset>
      <legend><h1>Buscar un peleador por id</h1></legend>
      <label class="d-none" for="id-fighter">id peleador</label>
      <input
        id="id-fighter"
        name="id-fighter"
        type="text"
        v-model="idFighter"
        placeholder="Ingresa id del peleador"
        required
      />
      <button type="submit">Buscar</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "HomeView",
  // props: {},
  data() {
    return {
      idFighter: null,
    };
  },
  computed: {
    validateFighter() {
      return this.idFighter?.trim();
    },
  },
  methods: {
    getFighter() {
      this.validateFighter &&
        this.$router.push(`/fighter/${this.validateFighter}`);
    },
  },
};
</script>

<style scoped>
fieldset {
  border: none;
}
fieldset > * {
  padding: 0.25rem 0.5rem;
}
legend {
  width: 100%;
}
h1 {
  margin: 1rem auto;
}
button {
  margin-left: 0.5rem;
}
</style>