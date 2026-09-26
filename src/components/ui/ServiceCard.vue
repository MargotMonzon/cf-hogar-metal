<script setup>
defineProps({
    service: {
        type: Object,
        required: true,
    },
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
        </div>

        <div class="service-card__content">
            <h3>
                {{ service.title }}
            </h3>

            <p>
                {{ service.description }}
            </p>

            <a href="#contacto" class="service-card__link">
                Consultar servicio
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
    transform: translateY(-7px);

    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.12);
}

.service-card__image {
    position: relative;

    height: 260px;

    overflow: hidden;

    background: #d4d4d4;
}

.service-card__image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.5s ease;
}

.service-card:hover .service-card__image img {
    transform: scale(1.05);
}

.service-card__overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(180deg,
            transparent 40%,
            rgba(0, 0, 0, 0.65));
}

.service-card__number {
    position: absolute;

    right: 20px;
    bottom: 15px;

    color: var(--color-white);

    font-size: 1.2rem;
    font-weight: 800;
}

.service-card__content {
    padding: 28px;
}

.service-card__content h3 {
    margin-bottom: 12px;

    color: var(--color-dark);

    font-size: 1.4rem;
}

.service-card__content p {
    min-height: 75px;

    color: var(--color-text-muted);

    line-height: 1.7;
}

.service-card__link {
    margin-top: 25px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    color: var(--color-dark);

    font-weight: 800;
}

.service-card__link span {
    transition: transform var(--transition);
}

.service-card__link:hover span {
    transform: translateX(5px);
}
</style>