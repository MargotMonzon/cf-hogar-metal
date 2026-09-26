<script setup>
import { computed } from 'vue'
import { company } from '../../config/company'

const whatsappUrl = computed(() => {
    const message = encodeURIComponent(
        'Hola, vi su página web y quisiera solicitar una cotización.',
    )

    return `https://wa.me/${company.whatsapp}?text=${message}`
})

const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="container footer__content">
            <div class="footer__top">
                <div class="footer__brand">
                    <a href="#inicio" class="footer__brand-link">
                        <span class="footer__logo">
                            C&F
                        </span>

                        <div>
                            <strong>
                                {{ company.name }}
                            </strong>

                            <span>
                                {{ company.subtitle }}
                            </span>
                        </div>
                    </a>

                    <p>
                        Soluciones en construcción, remodelación y
                        estructuras metálicas para hogares y empresas.
                    </p>

                    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="footer__whatsapp">
                        Solicitar cotización
                        <span>→</span>
                    </a>
                </div>

                <div class="footer__column">
                    <span class="footer__title">
                        Navegación
                    </span>

                    <nav class="footer__links">
                        <a href="#inicio">Inicio</a>
                        <a href="#nosotros">Nosotros</a>
                        <a href="#servicios">Servicios</a>
                        <a href="#proyectos">Proyectos</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </div>

                <div class="footer__column">
                    <span class="footer__title">
                        Servicios
                    </span>

                    <div class="footer__links">
                        <a href="#servicios">
                            Construcción general
                        </a>

                        <a href="#servicios">
                            Remodelaciones
                        </a>

                        <a href="#servicios">
                            Estructuras metálicas
                        </a>

                        <a href="#servicios">
                            Techumbres
                        </a>

                        <a href="#servicios">
                            Soldadura
                        </a>
                    </div>
                </div>

                <div class="footer__column">
                    <span class="footer__title">
                        Contacto
                    </span>

                    <div class="footer__contact">
                        <div>
                            <span>WhatsApp</span>

                            <strong>
                                +56 9 8763 6104
                            </strong>
                        </div>

                        <div>
                            <span>Correo</span>

                            <strong>
                                contacto@cfhogarymetal.cl
                            </strong>
                        </div>

                        <div>
                            <span>Atención</span>

                            <strong>
                                Previa coordinación
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__bottom">
                <p>
                    © {{ currentYear }} C&F Hogar y Metal.
                    Todos los derechos reservados.
                </p>

                <p class="footer__developer">
                    Sitio web desarrollado para C&F Hogar y Metal.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding-top: 80px;

    background: #0f0f0f;

    color: var(--color-white);
}

.footer__top {
    padding-bottom: 70px;

    display: grid;
    grid-template-columns: 1.4fr 0.7fr 0.9fr 1fr;

    gap: 60px;
}

.footer__brand-link {
    display: flex;
    align-items: center;

    gap: 12px;
}

.footer__logo {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: var(--radius-sm);

    color: var(--color-dark);
    background: var(--color-primary);

    font-weight: 900;
    font-size: 1.15rem;
}

.footer__brand-link>div {
    display: flex;
    flex-direction: column;

    line-height: 1.15;
}

.footer__brand-link strong {
    font-size: 1rem;
}

.footer__brand-link div span {
    margin-top: 5px;

    color: #737373;

    font-size: 0.7rem;

    letter-spacing: 1px;
    text-transform: uppercase;
}

.footer__brand>p {
    max-width: 360px;

    margin-top: 25px;

    color: #8a8a8a;

    line-height: 1.8;
}

.footer__whatsapp {
    margin-top: 25px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    color: var(--color-primary);

    font-weight: 800;
}

.footer__whatsapp span {
    transition: transform var(--transition);
}

.footer__whatsapp:hover span {
    transform: translateX(5px);
}

.footer__title {
    display: block;

    margin-bottom: 22px;

    color: #737373;

    font-size: 0.75rem;
    font-weight: 800;

    letter-spacing: 2px;
    text-transform: uppercase;
}

.footer__links {
    display: flex;
    flex-direction: column;

    gap: 13px;
}

.footer__links a {
    color: #c4c4c4;

    font-size: 0.9rem;

    transition: color var(--transition);
}

.footer__links a:hover {
    color: var(--color-primary);
}

.footer__contact {
    display: flex;
    flex-direction: column;

    gap: 20px;
}

.footer__contact div {
    display: flex;
    flex-direction: column;

    gap: 4px;
}

.footer__contact span {
    color: #737373;

    font-size: 0.72rem;
}

.footer__contact strong {
    color: #c4c4c4;

    font-size: 0.88rem;
    font-weight: 600;
}

.footer__bottom {
    padding: 25px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__bottom p {
    color: #666666;

    font-size: 0.75rem;
}

@media (max-width: 1000px) {
    .footer__top {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 600px) {
    .footer {
        padding-top: 60px;
    }

    .footer__top {
        grid-template-columns: 1fr;

        gap: 45px;

        padding-bottom: 50px;
    }

    .footer__bottom {
        flex-direction: column;
        align-items: flex-start;

        gap: 10px;
    }

    .footer__developer {
        display: none;
    }
}
</style>