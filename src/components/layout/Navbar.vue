<script setup>
import { ref } from 'vue'
import { company } from '../../config/company'

const menuOpen = ref(false)

const closeMenu = () => {
    menuOpen.value = false
}
</script>

<template>
    <header class="navbar">
        <div class="container navbar__content">
            <a href="#inicio" class="navbar__brand" @click="closeMenu">
                <span class="navbar__logo">C&F</span>

                <div class="navbar__brand-text">
                    <strong>{{ company.name }}</strong>
                    <span>{{ company.subtitle }}</span>
                </div>
            </a>

            <button class="navbar__toggle" type="button" aria-label="Abrir menú" @click="menuOpen = !menuOpen">
                <span></span>
                <span></span>
                <span></span>
            </button>

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
.navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 82px;

    background: rgba(23, 23, 23, 0.95);

    z-index: 1000;

    backdrop-filter: blur(10px);
}

.navbar__content {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar__brand {
    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--color-white);
}

.navbar__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    border-radius: var(--radius-sm);

    background: var(--color-primary);

    color: var(--color-dark);
    font-weight: 900;
    font-size: 1.15rem;
}

.navbar__brand-text {
    display: flex;
    flex-direction: column;

    line-height: 1.15;
}

.navbar__brand-text strong {
    font-size: 0.95rem;
}

.navbar__brand-text span {
    margin-top: 4px;

    color: #bdbdbd;

    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.navbar__nav {
    display: flex;
    align-items: center;
    gap: 32px;
}

.navbar__nav a {
    position: relative;

    color: #e5e5e5;

    font-size: 0.95rem;
    font-weight: 500;

    transition: color var(--transition);
}

.navbar__nav a:hover {
    color: var(--color-primary);
}

.navbar__toggle {
    display: none;

    width: 42px;
    height: 42px;

    background: transparent;

    cursor: pointer;
}

.navbar__toggle span {
    display: block;

    width: 25px;
    height: 2px;

    margin: 5px auto;

    background: var(--color-white);
}

@media (max-width: 850px) {
    .navbar__brand-text {
        display: none;
    }

    .navbar__toggle {
        display: block;
    }

    .navbar__nav {
        position: absolute;

        top: 82px;
        left: 0;

        width: 100%;

        padding: 30px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        background: var(--color-dark);

        opacity: 0;
        visibility: hidden;

        transform: translateY(-10px);

        transition: var(--transition);
    }

    .navbar__nav--open {
        opacity: 1;
        visibility: visible;

        transform: translateY(0);
    }

    .navbar__nav a {
        width: 100%;
        padding: 8px 0;

        font-size: 1.05rem;
    }
}
</style>