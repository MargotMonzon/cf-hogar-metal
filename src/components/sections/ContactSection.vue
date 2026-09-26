<script setup>
import { ref } from 'vue'
import { company } from '../../config/company'

const name = ref('')
const phone = ref('')
const projectType = ref('')
const message = ref('')

const projectTypes = [
    'Construcción general',
    'Remodelación',
    'Techumbre',
    'Estructura metálica',
    'Soldadura',
    'Otro',
]

const sendToWhatsapp = () => {
    const whatsappMessage = `
Hola, encontré C&F Hogar y Metal a través de su página web.

Mi nombre es: ${name.value}
Teléfono: ${phone.value || 'No indicado'}
Tipo de proyecto: ${projectType.value || 'No especificado'}

Mensaje:
${message.value}

Quisiera solicitar una cotización.
  `.trim()

    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        whatsappMessage,
    )}`

    window.open(url, '_blank')
}
</script>

<template>
    <section id="contacto" class="contact">
        <div class="container contact__grid">
            <!-- Información -->
            <div class="contact__info">
                <span class="contact__eyebrow">
                    Contacto
                </span>

                <h2>
                    ¿Tienes un proyecto
                    <span>en mente?</span>
                </h2>

                <p class="contact__description">
                    Cuéntanos qué necesitas y conversemos sobre tu proyecto.
                    Puedes enviarnos los detalles directamente a través de
                    WhatsApp para solicitar una cotización.
                </p>

                <div class="contact__details">
                    <div class="contact__detail">
                        <span class="contact__detail-label">
                            WhatsApp
                        </span>

                        <strong>
                            +56 9 8763 6104
                        </strong>
                    </div>

                    <div class="contact__detail">
                        <span class="contact__detail-label">
                            Correo
                        </span>

                        <strong>
                            contacto@cfhogarymetal.cl
                        </strong>
                    </div>

                    <div class="contact__detail">
                        <span class="contact__detail-label">
                            Atención
                        </span>

                        <strong>
                            Previa coordinación
                        </strong>
                    </div>
                </div>
            </div>

            <!-- Formulario -->
            <div class="contact__form-wrapper">
                <form class="contact__form" @submit.prevent="sendToWhatsapp">
                    <div class="contact__form-header">
                        <span>Solicita una cotización</span>

                        <h3>
                            Cuéntanos sobre tu proyecto
                        </h3>
                    </div>

                    <div class="form-group">
                        <label for="name">
                            Nombre
                        </label>

                        <input id="name" v-model="name" type="text" placeholder="Tu nombre" required />
                    </div>

                    <div class="form-group">
                        <label for="phone">
                            Teléfono
                        </label>

                        <input id="phone" v-model="phone" type="tel" placeholder="+56..." />
                    </div>

                    <div class="form-group">
                        <label for="project">
                            Tipo de proyecto
                        </label>

                        <select id="project" v-model="projectType">
                            <option value="" disabled>
                                Selecciona una opción
                            </option>

                            <option v-for="type in projectTypes" :key="type" :value="type">
                                {{ type }}
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message">
                            Cuéntanos qué necesitas
                        </label>

                        <textarea id="message" v-model="message" rows="5"
                            placeholder="Describe brevemente el trabajo que deseas realizar..." required></textarea>
                    </div>

                    <button type="submit" class="contact__submit">
                        Enviar por WhatsApp

                        <span>→</span>
                    </button>

                    <p class="contact__notice">
                        Al enviar el formulario se abrirá WhatsApp con
                        la información ingresada.
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    padding: 120px 0;

    background: var(--color-dark);
}

.contact__grid {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;

    gap: 100px;

    align-items: center;
}

/* INFORMACIÓN */

.contact__eyebrow {
    display: inline-block;

    margin-bottom: 15px;

    color: var(--color-primary);

    font-size: 0.85rem;
    font-weight: 800;

    letter-spacing: 3px;
    text-transform: uppercase;
}

.contact h2 {
    color: var(--color-white);

    font-size: clamp(2.8rem, 5vw, 4.8rem);

    line-height: 1.05;
    letter-spacing: -2px;
}

.contact h2 span {
    display: block;

    color: var(--color-primary);
}

.contact__description {
    max-width: 520px;

    margin-top: 28px;

    color: #a3a3a3;

    font-size: 1.05rem;
    line-height: 1.8;
}

.contact__details {
    margin-top: 50px;

    display: flex;
    flex-direction: column;
}

.contact__detail {
    padding: 20px 0;

    display: flex;
    flex-direction: column;

    gap: 5px;

    border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.contact__detail:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.contact__detail-label {
    color: #737373;

    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: 1px;
    text-transform: uppercase;
}

.contact__detail strong {
    color: var(--color-white);

    font-size: 1rem;
}

/* FORMULARIO */

.contact__form-wrapper {
    padding: 45px;

    border-radius: var(--radius-lg);

    background: var(--color-white);
}

.contact__form-header {
    margin-bottom: 35px;
}

.contact__form-header>span {
    color: var(--color-primary-hover);

    font-size: 0.78rem;
    font-weight: 800;

    letter-spacing: 2px;
    text-transform: uppercase;
}

.contact__form-header h3 {
    margin-top: 8px;

    color: var(--color-dark);

    font-size: 2rem;

    line-height: 1.2;
}

.contact__form {
    display: flex;
    flex-direction: column;

    gap: 22px;
}

.form-group {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.form-group label {
    color: var(--color-dark);

    font-size: 0.83rem;
    font-weight: 800;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    padding: 15px 16px;

    border: 1px solid #dedede;
    border-radius: var(--radius-sm);

    outline: none;

    color: var(--color-text);

    background: #fafafa;

    transition:
        border-color var(--transition),
        box-shadow var(--transition);
}

.form-group textarea {
    resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--color-primary);

    box-shadow:
        0 0 0 3px rgba(245, 158, 11, 0.12);
}

.contact__submit {
    min-height: 55px;

    padding: 0 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: var(--radius-sm);

    color: var(--color-dark);
    background: var(--color-primary);

    font-size: 0.95rem;
    font-weight: 900;

    cursor: pointer;

    transition:
        transform var(--transition),
        background var(--transition);
}

.contact__submit:hover {
    transform: translateY(-2px);

    background: var(--color-primary-hover);
}

.contact__submit span {
    font-size: 1.4rem;
}

.contact__notice {
    color: #a3a3a3;

    font-size: 0.75rem;
    line-height: 1.5;
}

/* RESPONSIVE */

@media (max-width: 950px) {
    .contact__grid {
        grid-template-columns: 1fr;

        gap: 60px;
    }
}

@media (max-width: 768px) {
    .contact {
        padding: 90px 0;
    }

    .contact__form-wrapper {
        padding: 35px;
    }
}

@media (max-width: 500px) {
    .contact {
        padding: 70px 0;
    }

    .contact__form-wrapper {
        padding: 25px 20px;
    }

    .contact h2 {
        letter-spacing: -1px;
    }
}
</style>