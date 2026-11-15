import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import { servicePages } from '../data/servicePages'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    ...servicePages.map((page) => ({
      path: page.path,
      name: page.path.slice(1),
      component: ServiceView,
      props: { serviceId: page.id },
      meta: { page },
    })),
  ],
  scrollBehavior(to) {
    return to.hash ? { el: to.hash, top: 95, behavior: 'smooth' } : { top: 0 }
  },
})
router.afterEach((to) => {
  const page = to.meta.page
  document.title =
    (page ? page.seo : 'Construcciones generales en Santiago') + ' | C&F Hogar y Metal'
  const setMeta = (selector, tag, attrs) => {
    let element = document.head.querySelector(selector)
    if (!element) {
      element = document.createElement(tag)
      document.head.appendChild(element)
    }
    for (const [name, value] of Object.entries(attrs)) element.setAttribute(name, value)
  }
  setMeta('meta[name="description"]', 'meta', {
    name: 'description',
    content: page
      ? page.intro
      : 'Techumbres, canaletas, filtraciones, remodelaciones, estructuras metálicas y soldadura en Santiago. Consulta por tu proyecto con C&F Hogar y Metal.',
  })
  setMeta('link[rel="canonical"]', 'link', {
    rel: 'canonical',
    href: 'https://cfhogarymetal.cl' + to.path,
  })
  document.getElementById('service-schema')?.remove()
  if (page) {
    const script = document.createElement('script')
    script.id = 'service-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.seo,
      description: page.intro,
      serviceType: page.seo,
      areaServed: { '@type': 'City', name: 'Santiago' },
      provider: {
        '@type': 'Organization',
        name: 'C&F Hogar y Metal',
        url: 'https://cfhogarymetal.cl/',
      },
      url: 'https://cfhogarymetal.cl' + page.path,
    })
    document.head.appendChild(script)
  }
})
export default router
