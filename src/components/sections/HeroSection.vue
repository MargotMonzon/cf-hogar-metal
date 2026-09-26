<script setup>
import { computed } from 'vue'
import { company } from '../../config/company'

const whatsappUrl = computed(() => {
    const message = encodeURIComponent(company.whatsappMessage)

    return `https://wa.me/${company.whatsapp}?text=${message}`
})
</script>

<template>
    <section id="inicio" class="hero">
        <div class="hero__overlay"></div>

        <div class="container hero__content">
            <div class="hero__text">
                <span class="hero__eyebrow">
                    {{ company.subtitle }}
                </span>

                <h1>
                    Construimos ideas.
                    <span>Transformamos espacios.</span>
                </h1>

                <p>
                    Soluciones en construcción, remodelación y
                    estructuras metálicas para hogares y empresas.
                </p>

                <div class="hero__actions">
                    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="button button--primary">
                        Solicitar cotización
                    </a>

                    <a href="#proyectos" class="button button--secondary">
                        Ver proyectos
                    </a>
                </div>
            </div>

            <div class="hero__info">
                <div class="hero__info-item">
                    <strong>Construcción</strong>
                    <span>Proyectos a medida</span>
                </div>

                <div class="hero__info-item">
                    <strong>Remodelaciones</strong>
                    <span>Renovamos tus espacios</span>
                </div>

                <div class="hero__info-item">
                    <strong>Metal</strong>
                    <span>Estructuras y soluciones</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    position: relative;

    min-height: 100vh;

    display: flex;
    align-items: center;

    padding-top: 82px;

    overflow: hidden;

    background:
        linear-gradient(90deg,
            rgba(10, 10, 10, 0.96) 0%,
            rgba(10, 10, 10, 0.86) 50%,
            rgba(10, 10, 10, 0.5) 100%),
        url('/images/hero/hero-construccion.jpg');

    background-size: cover;
    background-position: center;

    background-color: var(--color-dark);
}

.hero__overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(180deg,
            transparent 60%,
            rgba(0, 0, 0, 0.65));
}

.hero__content {
    position: relative;

    z-index: 1;

    padding-top: 80px;
    padding-bottom: 60px;
}

.hero__text {
    max-width: 760px;
}

.hero__eyebrow {
    display: inline-block;

    margin-bottom: 20px;

    color: var(--color-primary);

    font-size: 0.9rem;
    font-weight: 700;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.hero h1 {
    max-width: 850px;

    color: var(--color-white);

    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 800;

    line-height: 0.98;
    letter-spacing: -3px;
}

.hero h1 span {
    display: block;

    color: var(--color-primary);
}

.hero__text p {
    max-width: 650px;

    margin-top: 30px;

    color: #d4d4d4;

    font-size: clamp(1rem, 2vw, 1.25rem);

    line-height: 1.7;
}

.hero__actions {
    margin-top: 38px;

    display: flex;
    flex-wrap: wrap;
    gap: 14px;
}

.button {
    min-height: 52px;

    padding: 0 26px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: var(--radius-sm);

    font-weight: 700;

    transition:
        transform var(--transition),
        background var(--transition),
        color var(--transition);
}

.button:hover {
    transform: translateY(-2px);
}

.button--primary {
    color: var(--color-dark);
    background: var(--color-primary);
}

.button--primary:hover {
    background: var(--color-primary-hover);
}

.button--secondary {
    color: var(--color-white);

    border: 1px solid rgba(255, 255, 255, 0.4);

    background: rgba(255, 255, 255, 0.06);
}

.button--secondary:hover {
    background: var(--color-white);
    color: var(--color-dark);
}

.hero__info {
    margin-top: 90px;

    display: flex;
    gap: 60px;
}

.hero__info-item {
    display: flex;
    flex-direction: column;
}

.hero__info-item strong {
    color: var(--color-white);

    font-size: 1rem;
}

.hero__info-item span {
    margin-top: 4px;

    color: #a3a3a3;

    font-size: 0.86rem;
}

@media (max-width: 768px) {
    .hero {
        min-height: 100svh;

        background-position: 60% center;
    }

    .hero__content {
        padding-top: 60px;
    }

    .hero h1 {
        font-size: clamp(2.8rem, 13vw, 4.5rem);

        letter-spacing: -2px;
    }

    .hero__actions {
        flex-direction: column;
    }

    .button {
        width: 100%;
    }

    .hero__info {
        margin-top: 60px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 25px;
    }
}

@media (max-width: 480px) {
    .hero__info {
        grid-template-columns: 1fr;
    }
}
</style>