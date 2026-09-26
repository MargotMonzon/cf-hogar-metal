<script setup>
import { computed } from 'vue'

import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.vue'

const featuredProjects = computed(() => {
    return projects.filter((project) => project.featured)
})
</script>

<template>
    <section id="proyectos" class="projects">
        <div class="container">
            <div class="projects__header">
                <div>
                    <span class="projects__eyebrow">
                        Nuestros trabajos
                    </span>

                    <h2>
                        Proyectos que hablan
                        <span>por nuestro trabajo.</span>
                    </h2>
                </div>

                <div class="projects__intro">
                    <p>
                        Conoce algunos de los trabajos realizados
                        por C&F Hogar y Metal.
                    </p>

                    <a href="#galeria">
                        Ver todos los proyectos
                        <span>→</span>
                    </a>
                </div>
            </div>

            <div class="projects__grid">
                <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects {
    padding: 120px 0;

    background: var(--color-dark);
}

.projects__header {
    margin-bottom: 60px;

    display: grid;

    grid-template-columns: 1.3fr 0.7fr;

    gap: 70px;

    align-items: end;
}

.projects__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.projects h2 {
    max-width: 750px;

    color: var(--color-white);

    font-size: clamp(2.5rem, 5vw, 4.5rem);

    line-height: 1.05;
    letter-spacing: -2px;
}

.projects h2 span {
    display: block;

    color: var(--color-primary);
}

.projects__intro p {
    color: #a3a3a3;

    line-height: 1.8;
}

.projects__intro a {
    margin-top: 20px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    color: var(--color-white);

    font-weight: 800;
}

.projects__intro a span {
    transition: transform var(--transition);
}

.projects__intro a:hover span {
    transform: translateX(5px);
}

.projects__grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

@media (max-width: 1000px) {
    .projects__grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects__grid> :last-child {
        grid-column: 1 / -1;
    }
}

@media (max-width: 768px) {
    .projects {
        padding: 90px 0;
    }

    .projects__header {
        grid-template-columns: 1fr;

        gap: 25px;
    }
}

@media (max-width: 600px) {
    .projects {
        padding: 70px 0;
    }

    .projects__grid {
        grid-template-columns: 1fr;
    }

    .projects__grid> :last-child {
        grid-column: auto;
    }

    .projects h2 {
        letter-spacing: -1px;
    }
}
</style>