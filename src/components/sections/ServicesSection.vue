<script setup>
import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard.vue'
</script>

<template>
    <section id="servicios" class="services">
        <div class="container">

            <div class="services__header">
                <div>
                    <span class="services__eyebrow">
                        Nuestros servicios
                    </span>

                    <h2>
                        Soluciones para proteger,
                        <span>mejorar y construir tu hogar.</span>
                    </h2>
                </div>

                <div class="services__description">
                    <p>
                        Desde reparaciones de techumbres y filtraciones
                        hasta remodelaciones y estructuras metálicas.
                    </p>

                    <p>
                        Cuéntanos qué necesitas y encuentra la solución
                        adecuada para tu proyecto.
                    </p>
                </div>
            </div>

            <div class="services__grid">
                <ServiceCard v-for="service in services" :key="service.id" :service="service" />
            </div>

        </div>
    </section>
</template>

<style scoped>
.services {
    padding: 120px 0;

    background: var(--color-background);
}

.services__header {
    margin-bottom: 60px;

    display: grid;
    grid-template-columns: 1.3fr 0.7fr;

    gap: 70px;

    align-items: end;
}

.services__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary-hover);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.services h2 {
    max-width: 800px;

    color: var(--color-dark);

    font-size: clamp(2.5rem, 5vw, 4.5rem);

    line-height: 1.05;
    letter-spacing: -2px;
}

.services h2 span {
    display: block;

    color: var(--color-primary-hover);
}

/* DESCRIPCIÓN DEL ENCABEZADO */

.services__description {
    max-width: 470px;
}

.services__description p {
    color: var(--color-text-muted);

    font-size: 1rem;
    line-height: 1.8;
}

.services__description p+p {
    margin-top: 12px;
}

/* GRID DE SERVICIOS */

.services__grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

/* TABLET */

@media (max-width: 1000px) {
    .services__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* MOBILE / TABLET */

@media (max-width: 768px) {
    .services {
        padding: 90px 0;
    }

    .services__header {
        grid-template-columns: 1fr;

        gap: 25px;
    }

    .services__description {
        max-width: 100%;
    }
}

/* MOBILE */

@media (max-width: 600px) {
    .services {
        padding: 70px 0;
    }

    .services__grid {
        grid-template-columns: 1fr;
    }

    .services h2 {
        letter-spacing: -1px;
    }
}
</style>