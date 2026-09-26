<script setup>
import { computed, ref } from 'vue'
import { projects } from '../../data/projects'

const selectedCategory = ref('Todos')

const categories = computed(() => {
    const projectCategories = projects.map((project) => project.category)

    return ['Todos', ...new Set(projectCategories)]
})

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'Todos') {
        return projects
    }

    return projects.filter(
        (project) => project.category === selectedCategory.value,
    )
})
</script>

<template>
    <section id="galeria" class="gallery">
        <div class="container">
            <div class="gallery__header">
                <div>
                    <span class="gallery__eyebrow">
                        Galería
                    </span>

                    <h2>
                        Conoce más de
                        <span>nuestro trabajo.</span>
                    </h2>
                </div>

                <p>
                    Explora algunos de los proyectos realizados por
                    C&F Hogar y Metal en diferentes áreas de construcción,
                    remodelación y estructuras metálicas.
                </p>
            </div>

            <!-- Filtros -->
            <div class="gallery__filters">
                <button v-for="category in categories" :key="category" type="button" class="gallery__filter" :class="{
                    'gallery__filter--active':
                        selectedCategory === category,
                }" @click="selectedCategory = category">
                    {{ category }}
                </button>
            </div>

            <!-- Galería -->
            <div class="gallery__grid">
                <article v-for="project in filteredProjects" :key="project.id" class="gallery-card">
                    <div class="gallery-card__image">
                        <img :src="project.image" :alt="project.title" />

                        <div class="gallery-card__overlay">
                            <span>
                                {{ project.category }}
                            </span>

                            <div>
                                <h3>
                                    {{ project.title }}
                                </h3>

                                <p>
                                    {{ project.location }}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.gallery {
    padding: 120px 0;

    background: var(--color-white);
}

.gallery__header {
    margin-bottom: 50px;

    display: grid;
    grid-template-columns: 1.3fr 0.7fr;

    gap: 70px;

    align-items: end;
}

.gallery__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary-hover);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.gallery h2 {
    color: var(--color-dark);

    font-size: clamp(2.5rem, 5vw, 4.5rem);

    line-height: 1.05;
    letter-spacing: -2px;
}

.gallery h2 span {
    display: block;

    color: var(--color-primary-hover);
}

.gallery__header>p {
    color: var(--color-text-muted);

    line-height: 1.8;
}

/* FILTROS */

.gallery__filters {
    margin-bottom: 40px;

    display: flex;
    flex-wrap: wrap;

    gap: 10px;
}

.gallery__filter {
    padding: 11px 18px;

    border: 1px solid #dedede;
    border-radius: 50px;

    color: var(--color-text);
    background: transparent;

    font-weight: 700;

    cursor: pointer;

    transition:
        background var(--transition),
        color var(--transition),
        border-color var(--transition);
}

.gallery__filter:hover {
    border-color: var(--color-dark);
}

.gallery__filter--active {
    border-color: var(--color-dark);

    color: var(--color-white);
    background: var(--color-dark);
}

/* GRID */

.gallery__grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.gallery-card {
    overflow: hidden;

    border-radius: var(--radius-md);

    background: #e5e5e5;
}

.gallery-card__image {
    position: relative;

    height: 360px;

    overflow: hidden;
}

.gallery-card__image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.5s ease;
}

.gallery-card:hover img {
    transform: scale(1.07);
}

.gallery-card__overlay {
    position: absolute;
    inset: 0;

    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: var(--color-white);

    background:
        linear-gradient(180deg,
            rgba(0, 0, 0, 0.08),
            rgba(0, 0, 0, 0.78));

    opacity: 0;

    transition: opacity var(--transition);
}

.gallery-card:hover .gallery-card__overlay {
    opacity: 1;
}

.gallery-card__overlay>span {
    align-self: flex-start;

    padding: 7px 12px;

    border-radius: 50px;

    background: var(--color-primary);

    color: var(--color-dark);

    font-size: 0.72rem;
    font-weight: 800;

    text-transform: uppercase;
}

.gallery-card__overlay h3 {
    font-size: 1.4rem;
}

.gallery-card__overlay p {
    margin-top: 4px;

    color: #d4d4d4;
}

@media (max-width: 1000px) {
    .gallery__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .gallery {
        padding: 90px 0;
    }

    .gallery__header {
        grid-template-columns: 1fr;

        gap: 25px;
    }

    .gallery-card__overlay {
        opacity: 1;
    }
}

@media (max-width: 600px) {
    .gallery {
        padding: 70px 0;
    }

    .gallery__grid {
        grid-template-columns: 1fr;
    }

    .gallery-card__image {
        height: 320px;
    }

    .gallery h2 {
        letter-spacing: -1px;
    }
}
</style>