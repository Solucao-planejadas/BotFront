import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import CardDiretoria from '../components/CardDiretoria.vue'
import VisualizarDiretorias from '../components/VisualizarDiretorias.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/cardDiretoria',
      name: 'CardDiretoria',
      component: CardDiretoria
    },
    {
      path: '/visualizarDiretoria',
      name: 'VisualizarDiretorias',
      component: VisualizarDiretorias
    },
  ]
})

export default router
