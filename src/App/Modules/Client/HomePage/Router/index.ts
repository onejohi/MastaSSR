import HomePage from '@/App/Modules/Client/HomePage/Views/HomePage.vue'

export default [
  {
    path: '/',
    component: HomePage,
    name: 'HomePage',
    meta: {
      requiresAuth: false,
      title: 'Home'
    }
  }
]