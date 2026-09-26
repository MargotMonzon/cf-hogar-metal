<script setup>
defineProps({
    project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article class="project-card">
        <div class="project-card__image">
            <img :src="project.image" :alt="project.title" />

            <div class="project-card__overlay"></div>

            <span class="project-card__category">
                {{ project.category }}
            </span>

            <div class="project-card__content">
                <span class="project-card__location">
                    {{ project.location }}
                </span>

                <h3>
                    {{ project.title }}
                </h3>

                <p v-if="project.description">
                    {{ project.description }}
                </p>

                <span class="project-card__link">
                    Ver proyecto
                    <span>→</span>
                </span>
            </div>
        </div>
    </article>
</template>

<style scoped>
.project-card {
    position: relative;

    overflow: hidden;

    border-radius: var(--radius-md);

    background: var(--color-dark);
}

.project-card__image {
    position: relative;

    min-height: 520px;

    overflow: hidden;
}

.project-card__image img {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.6s ease;
}

.project-card:hover img {
    transform: scale(1.06);
}

.project-card__overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(180deg,
            rgba(0, 0, 0, 0.05) 20%,
            rgba(0, 0, 0, 0.85) 100%);
}

.project-card__category {
    position: absolute;

    top: 22px;
    left: 22px;

    padding: 8px 13px;

    border-radius: 50px;

    color: var(--color-dark);
    background: var(--color-primary);

    font-size: 0.75rem;
    font-weight: 800;

    text-transform: uppercase;
    letter-spacing: 1px;
}

.project-card__content {
    position: absolute;

    right: 0;
    bottom: 0;
    left: 0;

    padding: 30px;

    color: var(--color-white);
}

.project-card__location {
    display: block;

    margin-bottom: 8px;

    color: #d4d4d4;

    font-size: 0.85rem;
}

.project-card__content h3 {
    font-size: 1.7rem;

    line-height: 1.15;
}

.project-card__content p {
    max-width: 420px;

    margin-top: 12px;

    color: #d4d4d4;

    font-size: 0.92rem;
    line-height: 1.6;
}

.project-card__link {
    margin-top: 22px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    font-weight: 800;
}

.project-card__link>span {
    transition: transform var(--transition);
}

.project-card:hover .project-card__link>span {
    transform: translateX(5px);
}

@media (max-width: 768px) {
    .project-card__image {
        min-height: 430px;
    }
}
</style>