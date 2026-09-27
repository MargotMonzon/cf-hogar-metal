<script setup>
import { computed } from 'vue'
import { company } from '../../config/company'

const props = defineProps({
    service: {
        type: Object,
        required: true,
    },
})

const whatsappUrl = computed(() => {
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        props.service.whatsappMessage,
    )}`
})
</script>

<template>
    <article class="service-card">
        <div class="service-card__image">
            <img :src="service.image" :alt="service.title" />

            <div class="service-card__overlay"></div>

            <span class="service-card__number">
                {{ String(service.id).padStart(2, '0') }}
            </span>

            <div class="service-card__image-content">
                <h3>
                    {{ service.title }}
                </h3>

                <p>
                    {{ service.shortDescription }}
                </p>
            </div>
        </div>

        <div class="service-card__content">
            <p>
                {{ service.description }}
            </p>

            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="service-card__button">
                Cotizar este servicio
                <span>→</span>
            </a>
        </div>
    </article>
</template>

<style scoped>
.service-card {
    overflow: hidden;

    border-radius: var(--radius-md);

    background: var(--color-white);

    transition:
        transform var(--transition),
        box-shadow var(--transition);
}

.service-card:hover {
    transform: translateY(-8px);

    box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
}

.service-card__image {
    position: relative;

    height: 300px;

    overflow: hidden;

    background: #d4d4d4;
}

.service-card__image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.6s ease;
}

.service-card:hover .service-card__image img {
    transform: scale(1.07);
}

.service-card__overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(180deg,
            rgba(0, 0, 0, 0.05) 20%,
            rgba(0, 0, 0, 0.85) 100%);
}

.service-card__number {
    position: absolute;

    top: 20px;
    right: 20px;

    color: var(--color-white);

    font-size: 0.85rem;
    font-weight: 800;
}

.service-card__image-content {
    position: absolute;

    right: 25px;
    bottom: 25px;
    left: 25px;

    color: var(--color-white);
}

.service-card__image-content h3 {
    font-size: 1.65rem;
}

.service-card__image-content p {
    margin-top: 7px;

    color: #e5e5e5;

    font-size: 0.9rem;
}

.service-card__content {
    padding: 25px;
}

.service-card__content>p {
    color: var(--color-text-muted);

    line-height: 1.7;
}

.service-card__button {
    min-height: 48px;

    margin-top: 25px;
    padding: 0 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: var(--radius-sm);

    color: var(--color-dark);
    background: var(--color-primary);

    font-weight: 800;

    transition:
        transform var(--transition),
        background var(--transition);
}

.service-card__button:hover {
    background: var(--color-primary-hover);

    transform: translateY(-2px);
}

.service-card__button span {
    font-size: 1.3rem;
}
</style>