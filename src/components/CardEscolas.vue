<template>
  <div class="card">
    <div class="card-body scrollspy-example" style="height: 6rem">
      <div class="d-flex">
        <h5 class="card-title">Escola: {{ infoCard.escola }}</h5>
        <p class="card-text ms-4">Bairro: {{ infoCard.zona }}</p>
        <p class="card-text ms-4">Rede de Ensino: {{ infoCard.diretoria }}</p>
      </div>
      <div class="d-flex">
        <p class="card-text">Email: escolasteste1@gmail.com</p>
        <p class="card-text">Email Enviado:</p>
        <p class="text-danger ms-1">Não</p>
        <!-- <p class="text-success ms-1">Sim</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEscolas',
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
