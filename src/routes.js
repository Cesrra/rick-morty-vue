import CharactersList from '@/components/CharactersList.vue'
import CharacterDetail from '@/components/CharacterDetail.vue'

const routes = [
  { path: '/', component: CharactersList, name: 'home' },
  { path: '/detail/:id', component: CharacterDetail, name: 'detail' }
]

export default routes
