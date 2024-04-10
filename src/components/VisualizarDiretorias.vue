<template>
  <div class="container fixed-top">
  <div class="row justify-content-start mt-4">
    <div class="col-lg-6">
      <form>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Pesquisar..." aria-label="Pesquisar" aria-describedby="button-addon2">
          <button class="btn btn-primary" type="button" id="button-addon2">Procrar Diretoria de Ensino</button>
        </div>
      </form>
      <CardDiretoria/>
    </div>
  </div>
</div>

</template>
  
  <script>
import CardDiretoria from '../components/CardDiretoria.vue'


  export default {
    name: 'VisualizarDiretorias',
    components: {
      CardDiretoria,
    },
  }
  </script>
  
  <style scoped></style>
  