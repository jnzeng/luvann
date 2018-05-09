export default [
  {
    path: '/',
    component: () => import('@/pages/splash')
  },
  {
    path: '/landing',
    component: () => import('@/pages/landing')
  },
  {
    path: '/quiz',
    component: () => import('@/pages/quiz')
  },
  {
    path: '/profile',
    component: () => import('@/pages/profile'),
    props: { auth: true }
  },
  {
    path: '/register',
    component: () => import('@/pages/register')
  },
  {
    path: '/login',
    component: () => import('@/pages/login')
  },
  {
    path: '/product',
    component: () => import('@/pages/product')
  },
  {
    path: '/mission',
    component: () => import('@/pages/mission')
  }
]
