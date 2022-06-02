<template>
  <section id="fighter">
    <article v-if="fighter">
      <h2>¡Peleador encontrado!</h2>
      <h3 v-text="'id: ' + fighter.id" />
      <h3 v-text="'Nombre: ' + fighter.nombre" />
      <img :src="fighter.imgSrc" alt="" />
    </article>
    <h2 v-else>El peleador que buscas no existe &#128531;</h2>
  </section>
</template>

<script>
export default {
  name: "FighterView",
  props: ["fighter"],
};
</script>

<style scoped>
article >* {
  margin-bottom: .5rem;
}
img {
  display: inline-block;
  width: 40%;
  margin: 1rem auto;
}
</style>