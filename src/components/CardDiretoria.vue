<template>
  <div class="card">
    <div class="card-body scrollspy-example" style="height: 20rem; overflow-y: auto">
      <h5 class="card-title">Diretoria de ensino: {{ infoCard }}</h5>
      <p class="card-text">Região da diretoria: {{ infoCard }}</p>
      <p class="card-text">Região da diretoria: {{ infoCard }}</p>
      <p class="card-text">Região da diretoria: {{ infoCard }}</p>
      <p class="card-text">Região da diretoria: {{ infoCard }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDiretoria',
  props: {
    idCard: {
      type: String,
      required: true
    },
    infoCard: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
