<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
    menuOpen.value = false
}
</script>

<template>
    <header class="navbar">
        <div class="container navbar__content">

            <!-- MARCA -->
            <a href="#inicio" class="navbar__brand" aria-label="Ir al inicio - C&F Hogar y Metal" @click="closeMenu">
                <!-- Logo completo: desktop -->
                <div class="navbar__logo-wrapper navbar__logo-wrapper--desktop">
                    <img src="/images/brand/logocyf.png" alt="C&F Hogar y Metal - Construcciones Generales"
                        class="navbar__logo-img" />
                </div>

                <!-- Isotipo: mobile -->
                <div class="navbar__logo-wrapper navbar__logo-wrapper--mobile">
                    <img src="/iconocyf.png" alt="C&F Hogar y Metal" class="navbar__icon-img" />
                </div>
            </a>

            <!-- HAMBURGUESA -->
            <button class="navbar__toggle" type="button" :aria-expanded="menuOpen" aria-label="Abrir menú"
                @click="menuOpen = !menuOpen">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- NAVEGACIÓN -->
            <nav class="navbar__nav" :class="{ 'navbar__nav--open': menuOpen }">
                <a href="#inicio" @click="closeMenu">
                    Inicio
                </a>

                <a href="#nosotros" @click="closeMenu">
                    Nosotros
                </a>

                <a href="#servicios" @click="closeMenu">
                    Servicios
                </a>

                <a href="#proyectos" @click="closeMenu">
                    Proyectos
                </a>

                <a href="#contacto" @click="closeMenu">
                    Contacto
                </a>
            </nav>

        </div>
    </header>
</template>

<style scoped>
/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 82px;

    z-index: 1000;

    background: rgba(15, 15, 15, 0.96);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar__content {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
}


/* =========================
   LOGO
========================= */

.navbar__brand {
    display: flex;
    align-items: center;

    flex-shrink: 0;
}

/*
 * Como el logo actual tiene texto oscuro,
 * le damos una base clara.
 */
.navbar__logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    background: #f7f7f5;

    border-radius: 10px;

    transition:
        transform var(--transition),
        box-shadow var(--transition);
}

.navbar__logo-wrapper--desktop {
    width: 280px;
    height: 62px;

    padding: 4px 14px;
}

.navbar__brand:hover .navbar__logo-wrapper {
    transform: translateY(-1px);

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.18);
}

.navbar__logo-img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: contain;
}

/* Oculto en escritorio */
.navbar__logo-wrapper--mobile {
    display: none;
}


/* =========================
   LINKS
========================= */

.navbar__nav {
    display: flex;
    align-items: center;

    gap: 32px;
}

.navbar__nav a {
    position: relative;

    padding: 8px 0;

    color: #e5e5e5;

    font-size: 0.95rem;
    font-weight: 600;

    transition: color var(--transition);
}

.navbar__nav a::after {
    content: '';

    position: absolute;

    left: 0;
    bottom: 0;

    width: 0;
    height: 2px;

    background: var(--color-primary);

    transition: width var(--transition);
}

.navbar__nav a:hover {
    color: var(--color-primary);
}

.navbar__nav a:hover::after {
    width: 100%;
}


/* =========================
   HAMBURGUESA
========================= */

.navbar__toggle {
    display: none;

    width: 44px;
    height: 44px;

    padding: 0;

    border: 0;

    background: transparent;

    cursor: pointer;
}

.navbar__toggle span {
    display: block;

    width: 26px;
    height: 2px;

    margin: 6px auto;

    border-radius: 10px;

    background: var(--color-white);

    transition: var(--transition);
}


/* =========================
   TABLET / MOBILE
========================= */

@media (max-width: 850px) {

    .navbar {
        height: 72px;
    }

    /*
     * Ocultamos el logo largo.
     */
    .navbar__logo-wrapper--desktop {
        display: none;
    }

    /*
     * Mostramos solo la casita.
     */
    .navbar__logo-wrapper--mobile {
        width: 52px;
        height: 52px;

        padding: 5px;

        display: flex;

        background: #f7f7f5;

        border-radius: 10px;
    }

    .navbar__icon-img {
        display: block;

        width: 100%;
        height: 100%;

        object-fit: contain;
    }

    .navbar__toggle {
        display: block;

        position: relative;

        z-index: 1002;
    }

    .navbar__nav {
        position: absolute;

        top: 72px;
        left: 0;

        width: 100%;

        padding: 25px 5% 30px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 6px;

        background: rgba(15, 15, 15, 0.99);

        border-top: 1px solid rgba(255, 255, 255, 0.06);

        opacity: 0;
        visibility: hidden;

        transform: translateY(-10px);

        transition:
            opacity var(--transition),
            visibility var(--transition),
            transform var(--transition);
    }

    .navbar__nav--open {
        opacity: 1;
        visibility: visible;

        transform: translateY(0);
    }

    .navbar__nav a {
        width: 100%;

        padding: 13px 0;

        font-size: 1rem;
    }
}


/* =========================
   MOBILE PEQUEÑO
========================= */

@media (max-width: 480px) {

    .navbar__content {
        width: 92%;
    }

    .navbar__logo-wrapper--mobile {
        width: 48px;
        height: 48px;
    }

    .navbar__nav {
        padding-inline: 4%;
    }
}
</style>