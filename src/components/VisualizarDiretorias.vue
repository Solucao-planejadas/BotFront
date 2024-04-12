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

          <!-- <div class="d-flex" v-if="searchQuery">
            <select class="form-select" size="3" aria-label="Size 3 select example">
              <option v-for="item in filteredItems" :key="item.id">{{ item.name }}</option>
            </select>
          </div> -->
        </div>
      </div>
    </div>
    <div v-if="searchQuery">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="d-inline-block me-3 mt-3"
        style="max-width: 15rem"
      >
        <CardDiretoria :idCard="item.id" :infoCard="item.name" />
      </div>
    </div>

    <div v-if="true">
      <div v-for="item in escolas" :key="item.id" class="row mt-3" style="">
        <div class="col-10">
          <CardEscolas :idCard="item.id" :infoCard="item" />
        </div>
        <div class="col-2 align-self-center">
          <button
            type="button "
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModal' + item.id"
          >
            Mais Detalhes
          </button>
          <ModalEscolas :idCard="item.id" :infoCard="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardDiretoria from '../components/CardDiretoria.vue'
import CardEscolas from '../components/CardEscolas.vue'
import ModalEscolas from '../components/ModalEscola.vue'

export default {
  name: 'VisualizarDiretorias',
  components: {
    CardDiretoria,
    CardEscolas,
    ModalEscolas
  },
  data() {
    return {
      searchQuery: '',
      escolas: [
        { id: 1, escola: 'escola1', zona: 'zona sul1', diretoria: 'sul1' },
        { id: 2, escola: 'escola2', zona: 'zona sul2', diretoria: 'sul2' },
        { id: 3, escola: 'escola3', zona: 'zona sul3', diretoria: 'sul3' },
        { id: 4, escola: 'escola4', zona: 'zona sul4', diretoria: 'sul4' },
        { id: 5, escola: 'escola5', zona: 'zona sul5', diretoria: 'sul5' },
        { id: 6, escola: 'escola6', zona: 'zona sul6', diretoria: 'sul6' },
        { id: 7, escola: 'escola7', zona: 'zona sul7', diretoria: 'sul7' },
        { id: 8, escola: 'escola8', zona: 'zona sul8', diretoria: 'sul8' },
        { id: 9, escola: 'escola9', zona: 'zona sul9', diretoria: 'sul9' },
        { id: 10, escola: 'escola10', zona: 'zona sul10', diretoria: 'sul10' },
        { id: 11, escola: 'escola11', zona: 'zona sul11', diretoria: 'sul11' },
        { id: 12, escola: 'escola12', zona: 'zona sul12', diretoria: 'sul12' },
        { id: 13, escola: 'escola13', zona: 'zona sul13', diretoria: 'sul13' },
        { id: 14, escola: 'escola14', zona: 'zona sul14', diretoria: 'sul14' },
        { id: 15, escola: 'escola15', zona: 'zona sul15', diretoria: 'sul15' },
        { id: 16, escola: 'escola16', zona: 'zona sul16', diretoria: 'sul16' },
        { id: 17, escola: 'escola17', zona: 'zona sul17', diretoria: 'sul17' },
        { id: 18, escola: 'escola18', zona: 'zona sul18', diretoria: 'sul18' },
        { id: 19, escola: 'escola19', zona: 'zona sul19', diretoria: 'sul19' },
        { id: 20, escola: 'escola20', zona: 'zona sul20', diretoria: 'sul20' },
        { id: 21, escola: 'escola21', zona: 'zona sul21', diretoria: 'sul21' },
        { id: 22, escola: 'escola22', zona: 'zona sul22', diretoria: 'sul22' },
        { id: 23, escola: 'escola23', zona: 'zona sul23', diretoria: 'sul23' },
        { id: 24, escola: 'escola24', zona: 'zona sul24', diretoria: 'sul24' },
        { id: 25, escola: 'escola25', zona: 'zona sul25', diretoria: 'sul25' },
        { id: 26, escola: 'escola26', zona: 'zona sul26', diretoria: 'sul26' },
        { id: 27, escola: 'escola27', zona: 'zona sul27', diretoria: 'sul27' },
        { id: 28, escola: 'escola28', zona: 'zona sul28', diretoria: 'sul28' },
        { id: 29, escola: 'escola29', zona: 'zona sul29', diretoria: 'sul29' },
        { id: 30, escola: 'escola30', zona: 'zona sul30', diretoria: 'sul30' },
        { id: 31, escola: 'escola31', zona: 'zona sul31', diretoria: 'sul31' },
        { id: 32, escola: 'escola32', zona: 'zona sul32', diretoria: 'sul32' },
        { id: 33, escola: 'escola33', zona: 'zona sul33', diretoria: 'sul33' },
        { id: 34, escola: 'escola34', zona: 'zona sul34', diretoria: 'sul34' },
        { id: 35, escola: 'escola35', zona: 'zona sul35', diretoria: 'sul35' },
        { id: 36, escola: 'escola36', zona: 'zona sul36', diretoria: 'sul36' },
        { id: 37, escola: 'escola37', zona: 'zona sul37', diretoria: 'sul37' },
        { id: 38, escola: 'escola38', zona: 'zona sul38', diretoria: 'sul38' },
        { id: 39, escola: 'escola39', zona: 'zona sul39', diretoria: 'sul39' },
        { id: 40, escola: 'escola40', zona: 'zona sul40', diretoria: 'sul40' },
        { id: 41, escola: 'escola41', zona: 'zona sul41', diretoria: 'sul41' },
        { id: 42, escola: 'escola42', zona: 'zona sul42', diretoria: 'sul42' },
        { id: 43, escola: 'escola43', zona: 'zona sul43', diretoria: 'sul43' },
        { id: 44, escola: 'escola44', zona: 'zona sul44', diretoria: 'sul44' },
        { id: 45, escola: 'escola45', zona: 'zona sul45', diretoria: 'sul45' },
        { id: 46, escola: 'escola46', zona: 'zona sul46', diretoria: 'sul46' },
        { id: 47, escola: 'escola47', zona: 'zona sul47', diretoria: 'sul47' },
        { id: 48, escola: 'escola48', zona: 'zona sul48', diretoria: 'sul48' },
        { id: 49, escola: 'escola49', zona: 'zona sul49', diretoria: 'sul49' },
        { id: 50, escola: 'escola50', zona: 'zona sul50', diretoria: 'sul50' }
      ],

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
