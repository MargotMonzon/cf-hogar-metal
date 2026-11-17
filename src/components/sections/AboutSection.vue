<template>
    <section id="nosotros" class="about">
        <div class="container about__grid">
            <div class="about__image">
                <div class="about__image-wrapper">
                    <img src="/images/about/about-main.png" alt="Trabajos realizados por C&F Hogar y Metal" />

                    <div class="about__badge">
                        <img class="about__badge-logo" src="/images/brand/logocyf.png"
                            alt="C&F Hogar y Metal - Construcciones Generales" />
                    </div>
                </div>
            </div>

            <div class="about__content">
                <span class="about__eyebrow">
                    Quiénes somos
                </span>

                <h2>
                    Soluciones pensadas para
                    <span>cada proyecto.</span>
                </h2>

                <p>
                    En C&F Hogar y Metal nos dedicamos a desarrollar
                    soluciones en construcción, remodelación y trabajos
                    en estructuras metálicas.
                </p>

                <p>
                    Trabajamos cada proyecto de manera personalizada,
                    buscando entregar soluciones funcionales y adaptadas
                    a las necesidades de nuestros clientes.
                </p>

                <div class="about__features">
                    <div class="about__feature">
                        <span class="about__feature-number">01</span>

                        <div>
                            <strong>Atención personalizada</strong>
                            <p>
                                Cada proyecto se evalúa según sus propias
                                necesidades.
                            </p>
                        </div>
                    </div>

                    <div class="about__feature">
                        <span class="about__feature-number">02</span>

                        <div>
                            <strong>Soluciones a medida</strong>
                            <p>
                                Construcción y trabajos metálicos adaptados
                                a cada espacio.
                            </p>
                        </div>
                    </div>
                </div>

                <a href="#servicios" class="about__link">
                    Conoce nuestros servicios
                    <span>→</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    padding: 120px 0;

    background: var(--color-white);
}

.about__grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 90px;

    align-items: center;
}

.about__image-wrapper {
    position: relative;

    min-height: 600px;

    overflow: hidden;

    border-radius: var(--radius-md);

    background: #e5e5e5;
}

.about__image-wrapper > img {
    width: 100%;
    height: 100%;

    position: absolute;
    inset: 0;

    object-fit: cover;
}

.about__badge {
    position: absolute;
    right: 25px;
    bottom: 25px;
    width: min(220px, calc(100% - 50px));
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 20px rgb(0 0 0 / 12%);
}

.about__badge-logo {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
}

.about__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary-hover);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.about h2 {
    max-width: 600px;

    margin-bottom: 30px;

    color: var(--color-dark);

    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.05;

    letter-spacing: -2px;
}

.about h2 span {
    display: block;

    color: var(--color-primary-hover);
}

.about__content>p {
    max-width: 600px;

    margin-bottom: 18px;

    color: var(--color-text-muted);

    font-size: 1.05rem;
    line-height: 1.8;
}

.about__features {
    margin-top: 40px;

    display: grid;

    gap: 25px;
}

.about__feature {
    display: flex;

    gap: 20px;

    padding-top: 25px;

    border-top: 1px solid #e5e5e5;
}

.about__feature-number {
    color: var(--color-primary-hover);

    font-size: 0.8rem;
    font-weight: 800;
}

.about__feature strong {
    color: var(--color-dark);

    font-size: 1.05rem;
}

.about__feature p {
    margin-top: 5px;

    color: var(--color-text-muted);

    font-size: 0.95rem;
}

.about__link {
    margin-top: 35px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    color: var(--color-dark);

    font-weight: 800;
}

.about__link span {
    font-size: 1.4rem;

    transition: transform var(--transition);
}

.about__link:hover span {
    transform: translateX(5px);
}

@media (max-width: 900px) {
    .about {
        padding: 90px 0;
    }

    .about__grid {
        grid-template-columns: 1fr;

        gap: 55px;
    }

    .about__image-wrapper {
        min-height: 500px;
    }
}

@media (max-width: 600px) {
    .about {
        padding: 70px 0;
    }

    .about__image-wrapper {
        min-height: 380px;
    }

    .about__badge {
        width: min(180px, calc(100% - 30px));
        padding: 12px 16px;
        right: 15px;
        bottom: 15px;
    }

    .about h2 {
        letter-spacing: -1px;
    }
}
</style>