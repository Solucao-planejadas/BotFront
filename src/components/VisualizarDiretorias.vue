<template>
  <div class="container fixed-top">
    <div class="row justify-content-start mt-4">
      <div class="col-lg-6">
        <div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Pesquisar..."
              aria-label="Pesquisar"
              aria-describedby="button-addon2"
              v-model="searchQuery"
            />

            <button class="btn btn-primary" type="button" id="button-addon2">
              Procrar Diretoria de Ensino
            </button>
          </div>

          <div class="d-flex" v-if="searchQuery">
            <select class="form-select" size="3" aria-label="Size 3 select example">
              <option v-for="item in filteredItems" :key="item.id">{{ item.name }}</option>
            </select>
          </div>
        </div>
        <CardDiretoria />
      </div>
    </div>
  </div>
</template>

<script>
import CardDiretoria from '../components/CardDiretoria.vue'

export default {
  name: 'VisualizarDiretorias',
  components: {
    CardDiretoria
  },
  data() {
    return {
      searchQuery: '',
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Mango' },
        { id: 5, name: 'Pineapple' },
        // Adicione os outros itens conforme necessário
        { id: 6, name: 'Grape' },
        { id: 7, name: 'Watermelon' },
        { id: 8, name: 'Cherry' },
        { id: 9, name: 'Strawberry' },
        { id: 10, name: 'Kiwi' },
        { id: 11, name: 'Lemon' },
        { id: 12, name: 'Peach' },
        { id: 13, name: 'Pear' },
        { id: 14, name: 'Plum' },
        { id: 15, name: 'Blueberry' },
        { id: 16, name: 'Raspberry' },
        { id: 17, name: 'Blackberry' },
        { id: 18, name: 'Cantaloupe' },
        { id: 19, name: 'Honeydew' },
        { id: 20, name: 'Fig' },
        { id: 21, name: 'Pomegranate' },
        { id: 22, name: 'Coconut' },
        { id: 23, name: 'Papaya' },
        { id: 24, name: 'Guava' },
        { id: 25, name: 'Dragonfruit' },
        { id: 26, name: 'Lychee' },
        { id: 27, name: 'Passionfruit' },
        { id: 28, name: 'Starfruit' },
        { id: 29, name: 'Tangerine' },
        { id: 30, name: 'Apricot' }
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  }
}
</script>

<style scoped></style>
