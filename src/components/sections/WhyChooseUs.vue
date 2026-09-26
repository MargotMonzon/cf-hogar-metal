<template>
    <section class="why-us">
        <div class="container why-us__grid">
            <div class="why-us__intro">
                <span class="why-us__eyebrow">
                    ¿Por qué elegirnos?
                </span>

                <h2>
                    Cada proyecto merece
                    <span>una solución bien pensada.</span>
                </h2>

                <p>
                    Trabajamos buscando soluciones adaptadas a las necesidades,
                    características y objetivos de cada proyecto.
                </p>

                <a href="#contacto" class="why-us__link">
                    Hablemos de tu proyecto
                    <span>→</span>
                </a>
            </div>

            <div class="why-us__items">
                <article class="why-item">
                    <span class="why-item__number">
                        01
                    </span>

                    <div>
                        <h3>Atención personalizada</h3>

                        <p>
                            Cada trabajo se evalúa de acuerdo con las necesidades
                            específicas del cliente y del espacio.
                        </p>
                    </div>
                </article>

                <article class="why-item">
                    <span class="why-item__number">
                        02
                    </span>

                    <div>
                        <h3>Soluciones a medida</h3>

                        <p>
                            Buscamos alternativas funcionales para construcción,
                            remodelación y trabajos en metal.
                        </p>
                    </div>
                </article>

                <article class="why-item">
                    <span class="why-item__number">
                        03
                    </span>

                    <div>
                        <h3>Comunicación directa</h3>

                        <p>
                            Mantenemos contacto durante el desarrollo del trabajo
                            para coordinar avances y necesidades.
                        </p>
                    </div>
                </article>

                <article class="why-item">
                    <span class="why-item__number">
                        04
                    </span>

                    <div>
                        <h3>Compromiso con el proyecto</h3>

                        <p>
                            Abordamos cada trabajo buscando un resultado funcional,
                            resistente y acorde a lo solicitado.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.why-us {
    padding: 120px 0;

    background: var(--color-background);
}

.why-us__grid {
    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    gap: 100px;
}

.why-us__intro {
    position: sticky;

    top: 130px;

    align-self: start;
}

.why-us__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary-hover);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.why-us h2 {
    max-width: 600px;

    color: var(--color-dark);

    font-size: clamp(2.5rem, 5vw, 4.5rem);

    line-height: 1.05;
    letter-spacing: -2px;
}

.why-us h2 span {
    display: block;

    color: var(--color-primary-hover);
}

.why-us__intro>p {
    max-width: 520px;

    margin-top: 28px;

    color: var(--color-text-muted);

    font-size: 1.05rem;
    line-height: 1.8;
}

.why-us__link {
    margin-top: 30px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    color: var(--color-dark);

    font-weight: 800;
}

.why-us__link span {
    transition: transform var(--transition);
}

.why-us__link:hover span {
    transform: translateX(5px);
}

.why-us__items {
    display: flex;
    flex-direction: column;
}

.why-item {
    padding: 35px 0;

    display: grid;

    grid-template-columns: 70px 1fr;

    gap: 20px;

    border-top: 1px solid #d4d4d4;
}

.why-item:last-child {
    border-bottom: 1px solid #d4d4d4;
}

.why-item__number {
    color: var(--color-primary-hover);

    font-size: 0.82rem;
    font-weight: 900;
}

.why-item h3 {
    margin-bottom: 10px;

    color: var(--color-dark);

    font-size: 1.4rem;
}

.why-item p {
    max-width: 550px;

    color: var(--color-text-muted);

    line-height: 1.75;
}

@media (max-width: 900px) {
    .why-us {
        padding: 90px 0;
    }

    .why-us__grid {
        grid-template-columns: 1fr;

        gap: 55px;
    }

    .why-us__intro {
        position: static;
    }
}

@media (max-width: 600px) {
    .why-us {
        padding: 70px 0;
    }

    .why-item {
        grid-template-columns: 45px 1fr;

        padding: 28px 0;
    }

    .why-us h2 {
        letter-spacing: -1px;
    }
}
</style>