<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { company } from '../config/company'

const whatsappUrl = computed(() => {
    const message = encodeURIComponent(
        'Hola, quisiera solicitar una cotización para cambio o reparación de canaletas.'
    )

    return `https://wa.me/${company.whatsapp}?text=${message}`
})

let descriptionMeta = null
let canonicalLink = null
let structuredData = null

onMounted(() => {
    document.title =
        'Cambio y Reparación de Canaletas en Santiago | C&F Hogar y Metal'

    descriptionMeta = document.querySelector(
        'meta[name="description"]'
    )

    if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta')
        descriptionMeta.setAttribute('name', 'description')
        document.head.appendChild(descriptionMeta)
    }

    descriptionMeta.setAttribute(
        'content',
        'Cambio, reparación e instalación de canaletas en Santiago. Soluciones para filtraciones, aguas lluvias y techumbres. Solicita una cotización con C&F Hogar y Metal.'
    )

    canonicalLink = document.querySelector(
        'link[rel="canonical"]'
    )

    if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
    }

    canonicalLink.setAttribute(
        'href',
        'https://cfhogarymetal.cl/cambio-de-canaletas'
    )

    structuredData = document.createElement('script')

    structuredData.type = 'application/ld+json'

    structuredData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Cambio y reparación de canaletas',
        serviceType: 'Cambio, reparación e instalación de canaletas',
        areaServed: {
            '@type': 'City',
            name: 'Santiago',
        },
        provider: {
            '@type': 'Organization',
            name: 'C&F Hogar y Metal',
            url: 'https://cfhogarymetal.cl/',
        },
        url: 'https://cfhogarymetal.cl/cambio-de-canaletas',
    })

    document.head.appendChild(structuredData)
})

onBeforeUnmount(() => {
    if (structuredData) {
        structuredData.remove()
    }
})
</script>

<template>
    <div class="canaletas-page">

        <header class="service-navbar">
            <div class="container service-navbar__content">

                <a href="/" class="service-navbar__brand">
                    <img src="/images/brand/logocyf.png" alt="C&F Hogar y Metal" />
                </a>

                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="navbar-cta">
                    Cotizar
                </a>

            </div>
        </header>


        <!-- HERO -->

        <section class="service-hero">

            <div class="service-hero__overlay"></div>

            <div class="container service-hero__content">

                <span class="eyebrow">
                    Canaletas y aguas lluvias
                </span>

                <h1>
                    Cambio y reparación
                    <span>de canaletas en Santiago.</span>
                </h1>

                <p>
                    Instalamos, reparamos y reemplazamos canaletas
                    para mejorar la evacuación de aguas lluvias
                    y ayudar a prevenir filtraciones en tu hogar.
                </p>

                <div class="hero-actions">

                    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="button button--primary">
                        Solicitar cotización
                    </a>

                    <a href="#servicio" class="button button--secondary">
                        Ver servicio
                    </a>

                </div>

            </div>

        </section>


        <!-- PROBLEMAS -->

        <section id="servicio" class="problems">
            <div class="container">

                <div class="section-heading">

                    <span class="eyebrow">
                        ¿Necesitas cambiar tus canaletas?
                    </span>

                    <h2>
                        Soluciones para proteger
                        <span>tu vivienda de la lluvia.</span>
                    </h2>

                </div>


                <div class="problems__grid">

                    <article class="problem-card">
                        <span>01</span>

                        <h3>
                            Canaletas deterioradas
                        </h3>

                        <p>
                            Reemplazamos canaletas dañadas,
                            deformadas u oxidadas que ya no
                            cumplen correctamente su función.
                        </p>
                    </article>


                    <article class="problem-card">
                        <span>02</span>

                        <h3>
                            Filtraciones
                        </h3>

                        <p>
                            Revisamos sectores donde el agua
                            puede estar ingresando por uniones,
                            encuentros o canaletas deterioradas.
                        </p>
                    </article>


                    <article class="problem-card">
                        <span>03</span>

                        <h3>
                            Desbordes de agua
                        </h3>

                        <p>
                            Mejoramos la evacuación de aguas
                            lluvias cuando las canaletas presentan
                            problemas de pendiente o capacidad.
                        </p>
                    </article>

                </div>

            </div>
        </section>


        <!-- SERVICIO -->

        <section class="process">

            <div class="container process__layout">

                <div>

                    <span class="eyebrow">
                        Nuestro trabajo
                    </span>

                    <h2>
                        Servicio de canaletas
                        <span>a la medida de tu proyecto.</span>
                    </h2>

                </div>


                <div class="process__list">

                    <div class="process-item">
                        <strong>
                            Evaluación
                        </strong>

                        <p>
                            Revisamos el estado actual de
                            canaletas, bajadas y zonas de
                            evacuación.
                        </p>
                    </div>


                    <div class="process-item">
                        <strong>
                            Reparación
                        </strong>

                        <p>
                            Sellamos y corregimos problemas
                            cuando la canaleta todavía puede
                            recuperarse.
                        </p>
                    </div>


                    <div class="process-item">
                        <strong>
                            Reemplazo
                        </strong>

                        <p>
                            Retiramos canaletas deterioradas
                            e instalamos nuevas soluciones
                            según las características del lugar.
                        </p>
                    </div>


                    <div class="process-item">
                        <strong>
                            Terminaciones
                        </strong>

                        <p>
                            Revisamos uniones y evacuación
                            para entregar una solución limpia
                            y funcional.
                        </p>
                    </div>

                </div>

            </div>

        </section>


        <!-- CTA -->

        <section class="service-cta">

            <div class="container service-cta__content">

                <span class="eyebrow">
                    C&F Hogar y Metal
                </span>

                <h2>
                    ¿Problemas con tus canaletas?
                </h2>

                <p>
                    Cuéntanos qué necesitas y solicita una
                    cotización para tu proyecto.
                </p>

                <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="button button--primary">
                    Cotizar por WhatsApp
                </a>

            </div>

        </section>


        <footer class="service-footer">

            <div class="container">
                <p>
                    © C&F Hogar y Metal · Construcciones Generales
                </p>

                <a href="/">
                    Volver al inicio
                </a>
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

.service-navbar__brand { background: #f7f7f5; border-radius: 10px; padding: 4px 12px; }
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
        linear-gradient(90deg,
            rgba(10, 10, 10, 0.97) 0%,
            rgba(10, 10, 10, 0.88) 45%,
            rgba(10, 10, 10, 0.55) 100%),
        url('/images/services/canaletas.png');

    background-size: cover;
    background-position: center;
}

.service-hero__overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(180deg,
            transparent 60%,
            rgba(0, 0, 0, 0.72));
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

.problem-card>span {
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

    .service-navbar__brand { background: #f7f7f5; border-radius: 10px; padding: 4px 12px; }
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

    .service-navbar__brand { background: #f7f7f5; border-radius: 10px; padding: 4px 12px; }
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
</style>