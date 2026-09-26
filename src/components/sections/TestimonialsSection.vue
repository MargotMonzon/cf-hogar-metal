<script setup>
import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../ui/TestimonialCard.vue'
</script>

<template>
    <section class="testimonials">
        <div class="container">
            <div class="testimonials__header">
                <div>
                    <span class="testimonials__eyebrow">
                        Testimonios
                    </span>

                    <h2>
                        La confianza también
                        <span>se construye.</span>
                    </h2>
                </div>

                <p>
                    Conoce la experiencia de quienes han confiado
                    en C&F Hogar y Metal para desarrollar sus proyectos.
                </p>
            </div>

            <div class="testimonials__grid">
                <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
            </div>

            <p class="testimonials__notice">
                Los testimonios mostrados actualmente son contenido
                de demostración y serán reemplazados por opiniones reales.
            </p>
        </div>
    </section>
</template>

<style scoped>
.testimonials {
    padding: 120px 0;

    background: var(--color-white);
}

.testimonials__header {
    margin-bottom: 55px;

    display: grid;
    grid-template-columns: 1.3fr 0.7fr;

    gap: 70px;

    align-items: end;
}

.testimonials__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary-hover);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.testimonials h2 {
    color: var(--color-dark);

    font-size: clamp(2.5rem, 5vw, 4.5rem);

    line-height: 1.05;
    letter-spacing: -2px;
}

.testimonials h2 span {
    display: block;

    color: var(--color-primary-hover);
}

.testimonials__header>p {
    color: var(--color-text-muted);

    line-height: 1.8;
}

.testimonials__grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.testimonials__notice {
    margin-top: 25px;

    color: #a3a3a3;

    font-size: 0.75rem;
    text-align: center;
}

@media (max-width: 950px) {
    .testimonials__grid {
        grid-template-columns: 1fr 1fr;
    }

    .testimonials__grid> :last-child {
        grid-column: 1 / -1;
    }
}

@media (max-width: 768px) {
    .testimonials {
        padding: 90px 0;
    }

    .testimonials__header {
        grid-template-columns: 1fr;

        gap: 25px;
    }
}

@media (max-width: 600px) {
    .testimonials {
        padding: 70px 0;
    }

    .testimonials__grid {
        grid-template-columns: 1fr;
    }

    .testimonials__grid> :last-child {
        grid-column: auto;
    }

    .testimonials h2 {
        letter-spacing: -1px;
    }
}
</style>