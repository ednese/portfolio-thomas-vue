import Vue from 'vue'
import Router from 'vue-router'
import i18n from '../i18n'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/components/Home')
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('@/components/Portfolio')
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
