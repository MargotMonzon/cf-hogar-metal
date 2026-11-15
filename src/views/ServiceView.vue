<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { company } from '../config/company'
import { services } from '../data/services'
import { servicePages } from '../data/servicePages'
const props = defineProps({ serviceId: { type: Number, required: true } })
const page = computed(() => servicePages.find((item) => item.id === props.serviceId))
const service = computed(() => services.find((item) => item.id === props.serviceId))
const related = computed(() => services.filter((item) => item.id !== props.serviceId))
const whatsappUrl = computed(
  () =>
    'https://wa.me/' +
    company.whatsapp +
    '?text=' +
    encodeURIComponent(service.value.whatsappMessage),
)
</script>
<template>
  <div class="canaletas-page" :style="{ '--service-image': 'url(' + service.image + ')' }">
    <header class="service-navbar">
      <div class="container service-navbar__content">
        <RouterLink
          to="/"
          class="service-navbar__brand"
          aria-label="C&F Hogar y Metal: volver al inicio"
          ><img src="/images/brand/logocyf.png" alt="C&F Hogar y Metal"
        /></RouterLink>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="navbar-cta"
          >Cotizar</a
        >
      </div>
    </header>
    <main>
      <section class="service-hero">
        <div class="service-hero__overlay"></div>
        <div class="container service-hero__content">
          <span class="eyebrow">{{ page.eyebrow }}</span>
          <h1>
            {{ page.heading }} <span>{{ page.accent }}</span>
          </h1>
          <p>{{ page.intro }}</p>
          <div class="hero-actions">
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="button button--primary"
              >Solicitar cotización</a
            ><a href="#servicio" class="button button--secondary">Ver servicio</a>
          </div>
        </div>
      </section>
      <section id="servicio" class="problems">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">{{ service.title }}</span>
            <h2>Soluciones para <span>tu proyecto.</span></h2>
            <p class="service-details">{{ page.details }}</p>
          </div>
          <div class="problems__grid">
            <article v-for="(job, index) in page.jobs" :key="job[0]" class="problem-card">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <h3>{{ job[0] }}</h3>
              <p>{{ job[1] }}</p>
            </article>
          </div>
        </div>
      </section>
      <section class="process">
        <div class="container process__layout">
          <div>
            <span class="eyebrow">Nuestro trabajo</span>
            <h2>De tu consulta <span>a la solución.</span></h2>
          </div>
          <div class="process__list">
            <div v-for="step in page.steps" :key="step[0]" class="process-item">
              <strong>{{ step[0] }}</strong>
              <p>{{ step[1] }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="questions">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Resolvemos tus dudas</span>
            <h2>Preguntas <span>frecuentes.</span></h2>
          </div>
          <details v-for="faq in page.faq" :key="faq[0]">
            <summary>{{ faq[0] }}</summary>
            <p>{{ faq[1] }}</p>
          </details>
        </div>
      </section>
      <section class="service-cta">
        <div class="container service-cta__content">
          <span class="eyebrow">{{ company.name }}</span>
          <h2>Cuéntanos qué necesitas.</h2>
          <p>
            Consulta por {{ service.title.toLowerCase() }} en Santiago. Comparte la ubicación de tu
            proyecto para confirmar cobertura y coordinar una evaluación.
          </p>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="button button--primary"
            >Cotizar por WhatsApp</a
          >
        </div>
      </section>
      <section class="related">
        <div class="container">
          <h2>Otros servicios</h2>
          <nav aria-label="Otros servicios" class="related__links">
            <RouterLink v-for="item in related" :key="item.id" :to="item.path"
              >{{ item.title }} <span aria-hidden="true">→</span></RouterLink
            >
          </nav>
          <RouterLink to="/#servicios" class="back-home">Volver a todos los servicios</RouterLink>
        </div>
      </section>
    </main>
    <footer class="service-footer">
      <div class="container">
        <p>© {{ company.name }} · Construcciones Generales</p>
        <RouterLink to="/">Volver al inicio</RouterLink>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.canaletas-page {
  background: var(--color-background);
}

.service-navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 82px;

  z-index: 1000;

  background: rgba(15, 15, 15, 0.96);

  backdrop-filter: blur(12px);
}

.service-navbar__content {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-navbar__brand {
  background: #f7f7f5;
  border-radius: 10px;
  padding: 4px 12px;
}
.service-navbar__brand img {
  width: auto;
  height: 58px;

  display: block;

  object-fit: contain;
}

.navbar-cta {
  padding: 11px 20px;

  color: var(--color-dark);

  background: var(--color-primary);

  border-radius: var(--radius-sm);

  font-weight: 700;
}

/* HERO */

.service-hero {
  position: relative;

  min-height: 90vh;

  padding-top: 82px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background:
    linear-gradient(
      90deg,
      rgba(10, 10, 10, 0.97) 0%,
      rgba(10, 10, 10, 0.88) 45%,
      rgba(10, 10, 10, 0.55) 100%
    ),
    var(--service-image);

  background-size: cover;
  background-position: center;
}

.service-hero__overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.72));
}

.service-hero__content {
  position: relative;

  z-index: 1;

  padding-top: 80px;
  padding-bottom: 80px;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 18px;

  color: var(--color-primary);

  font-size: 0.82rem;
  font-weight: 800;

  letter-spacing: 3px;
  text-transform: uppercase;
}

.service-hero h1 {
  max-width: 900px;

  color: white;

  font-size: clamp(3rem, 7vw, 6rem);

  line-height: 0.98;
  letter-spacing: -3px;
}

.service-hero h1 span {
  display: block;

  color: var(--color-primary);
}

.service-hero p {
  max-width: 680px;

  margin-top: 30px;

  color: #d4d4d4;

  font-size: clamp(1rem, 2vw, 1.2rem);

  line-height: 1.8;
}

.hero-actions {
  margin-top: 38px;

  display: flex;
  flex-wrap: wrap;

  gap: 14px;
}

/* BUTTONS */

.button {
  min-height: 52px;

  padding: 0 26px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--radius-sm);

  font-weight: 700;

  transition: var(--transition);
}

.button:hover {
  transform: translateY(-2px);
}

.button--primary {
  color: var(--color-dark);

  background: var(--color-primary);
}

.button--secondary {
  color: white;

  border: 1px solid rgba(255, 255, 255, 0.4);

  background: rgba(255, 255, 255, 0.06);
}

/* SECCIONES */

.problems,
.process {
  padding: 110px 0;
}

.section-heading {
  max-width: 900px;

  margin-bottom: 55px;
}

.section-heading h2,
.process h2 {
  color: var(--color-dark);

  font-size: clamp(2.4rem, 5vw, 4.3rem);

  line-height: 1.05;

  letter-spacing: -2px;
}

.section-heading h2 span,
.process h2 span {
  display: block;

  color: var(--color-primary-hover);
}

/* PROBLEMS */

.problems__grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 22px;
}

.problem-card {
  padding: 35px;

  border: 1px solid #e5e5e5;

  border-radius: 16px;

  background: white;
}

.problem-card > span {
  color: var(--color-primary-hover);

  font-weight: 800;
}

.problem-card h3 {
  margin-top: 25px;

  color: var(--color-dark);

  font-size: 1.35rem;
}

.problem-card p {
  margin-top: 14px;

  color: var(--color-text-muted);

  line-height: 1.8;
}

/* PROCESS */

.process {
  background: #f4f4f2;
}

.process__layout {
  display: grid;

  grid-template-columns: 0.9fr 1.1fr;

  gap: 90px;
}

.process__list {
  border-top: 1px solid #d8d8d8;
}

.process-item {
  padding: 28px 0;

  display: grid;

  grid-template-columns: 160px 1fr;

  gap: 30px;

  border-bottom: 1px solid #d8d8d8;
}

.process-item strong {
  color: var(--color-dark);

  font-size: 1.1rem;
}

.process-item p {
  color: var(--color-text-muted);

  line-height: 1.7;
}

/* CTA */

.service-cta {
  padding: 110px 0;

  text-align: center;

  background: var(--color-dark);
}

.service-cta__content {
  max-width: 800px;
}

.service-cta h2 {
  color: white;

  font-size: clamp(2.5rem, 5vw, 4.5rem);

  line-height: 1;
}

.service-cta p {
  max-width: 600px;

  margin: 25px auto 35px;

  color: #bdbdbd;

  line-height: 1.8;
}

/* FOOTER */

.service-footer {
  padding: 25px 0;

  background: #0c0c0c;
}

.service-footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
}

.service-footer p,
.service-footer a {
  color: #a3a3a3;

  font-size: 0.85rem;
}

/* RESPONSIVE */

@media (max-width: 850px) {
  .service-navbar {
    height: 72px;
  }

  .service-navbar__brand {
    background: #f7f7f5;
    border-radius: 10px;
    padding: 4px 12px;
  }
  .service-navbar__brand img {
    height: 48px;
  }

  .service-hero {
    min-height: auto;

    padding-top: 72px;

    background-position: 60% center;
  }

  .service-hero__content {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .service-hero h1 {
    font-size: clamp(2.7rem, 12vw, 4.5rem);

    letter-spacing: -2px;
  }

  .problems,
  .process,
  .service-cta {
    padding: 80px 0;
  }

  .problems__grid {
    grid-template-columns: 1fr;
  }

  .process__layout {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .process-item {
    grid-template-columns: 1fr;

    gap: 8px;
  }
}

@media (max-width: 600px) {
  .service-navbar__brand {
    background: #f7f7f5;
    border-radius: 10px;
    padding: 4px 12px;
  }
  .service-navbar__brand img {
    height: 42px;
    max-width: 185px;
  }

  .navbar-cta {
    padding: 9px 14px;

    font-size: 0.85rem;
  }

  .service-hero__content {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .problem-card {
    padding: 26px;
  }

  .service-footer .container {
    flex-direction: column;

    text-align: center;
  }
}

.service-details {
  margin-top: 24px;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 760px;
}
.questions,
.related {
  padding: 90px 0;
  background: var(--color-white);
}
.questions details {
  border-bottom: 1px solid #dedede;
  padding: 22px 0;
}
.questions summary {
  cursor: pointer;
  font-weight: 700;
  line-height: 1.6;
}
.questions details p {
  margin-top: 16px;
  max-width: 850px;
  color: var(--color-text-muted);
  line-height: 1.8;
}
.related h2 {
  font-size: 2rem;
  margin-bottom: 24px;
}
.related__links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.related__links a {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 20px;
  border: 1px solid #dedede;
  border-radius: var(--radius-sm);
  font-weight: 700;
}
.related__links a:hover {
  border-color: var(--color-primary-hover);
}
.back-home {
  display: inline-block;
  padding: 16px 0;
  margin-top: 16px;
  text-decoration: underline;
}
a:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 5px;
}
#servicio {
  scroll-margin-top: 95px;
}
.service-hero h1,
.section-heading h2,
.process h2,
.service-cta h2 {
  overflow-wrap: anywhere;
}
@media (max-width: 768px) {
  .service-hero {
    min-height: 100svh;
  }
  .service-hero h1 {
    font-size: clamp(2rem, 9vw, 3.8rem);
    letter-spacing: -1px;
  }
  .service-hero__content {
    padding-top: 55px;
    padding-bottom: 55px;
  }
  .service-hero p {
    font-size: 1rem;
  }
  .problems,
  .process,
  .questions,
  .related,
  .service-cta {
    padding: 65px 0;
  }
  .section-heading h2,
  .process h2,
  .service-cta h2 {
    font-size: clamp(2rem, 8vw, 3rem);
    letter-spacing: -1px;
  }
  .problems__grid,
  .process__layout,
  .related__links {
    grid-template-columns: minmax(0, 1fr);
  }
  .process__layout {
    gap: 32px;
  }
  .process-item {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
  .hero-actions {
    flex-direction: column;
  }
  .hero-actions .button {
    width: 100%;
  }
  .service-footer .container {
    align-items: flex-start;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
</style>
