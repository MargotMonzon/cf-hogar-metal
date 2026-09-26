<script setup>
defineProps({
    testimonial: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article class="testimonial-card">
        <div class="testimonial-card__top">
            <div class="testimonial-card__stars">
                <span v-for="star in testimonial.rating" :key="star">
                    ★
                </span>
            </div>

            <span v-if="testimonial.demo" class="testimonial-card__demo">
                Demo
            </span>
        </div>

        <blockquote>
            “{{ testimonial.text }}”
        </blockquote>

        <div class="testimonial-card__client">
            <div class="testimonial-card__avatar">
                {{ testimonial.name.charAt(0) }}
            </div>

            <div>
                <strong>
                    {{ testimonial.name }}
                </strong>

                <span>
                    {{ testimonial.project }}
                </span>

                <small>
                    {{ testimonial.location }}
                </small>
            </div>
        </div>
    </article>
</template>

<style scoped>
.testimonial-card {
    height: 100%;

    padding: 35px;

    display: flex;
    flex-direction: column;

    border: 1px solid #e5e5e5;
    border-radius: var(--radius-md);

    background: var(--color-white);

    transition:
        transform var(--transition),
        box-shadow var(--transition);
}

.testimonial-card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.08);
}

.testimonial-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
}

.testimonial-card__stars {
    display: flex;

    gap: 4px;

    color: var(--color-primary);

    font-size: 1.1rem;
}

.testimonial-card__demo {
    padding: 5px 9px;

    border-radius: 50px;

    color: var(--color-text-muted);
    background: #f0f0f0;

    font-size: 0.65rem;
    font-weight: 800;

    letter-spacing: 1px;
    text-transform: uppercase;
}

.testimonial-card blockquote {
    flex: 1;

    margin: 30px 0;

    color: var(--color-dark);

    font-size: 1.08rem;
    line-height: 1.8;
}

.testimonial-card__client {
    padding-top: 25px;

    display: flex;
    align-items: center;

    gap: 15px;

    border-top: 1px solid #eeeeee;
}

.testimonial-card__avatar {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 50%;

    color: var(--color-dark);
    background: var(--color-primary);

    font-size: 1.1rem;
    font-weight: 900;
}

.testimonial-card__client div:last-child {
    display: flex;
    flex-direction: column;
}

.testimonial-card__client strong {
    color: var(--color-dark);
}

.testimonial-card__client span {
    margin-top: 2px;

    color: var(--color-text-muted);

    font-size: 0.85rem;
}

.testimonial-card__client small {
    margin-top: 2px;

    color: #a3a3a3;

    font-size: 0.78rem;
}
</style>