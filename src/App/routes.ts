import HomePageRoutes from '@/App/Modules/Client/HomePage/Router'
import Page404 from '@/App/Page404/Views/Page404.vue'

export default [
  ...HomePageRoutes,
  {
    path: '/:catchAll(.*)',
    component: Page404,
    name: 'NotFound',
    meta: {
      requiresAuth: false,
      title: 'Page not found.',
    },
  }
]
