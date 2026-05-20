<template>
    <section id="certificates" class="section certificates" data-aos="fade-up">
        <div class="section-header">
            <p class="section-tag">Certificates</p>
            <h2>Certificados & Formação</h2>

            <p>
                Formação técnica e módulos desenvolvidos durante o curso de
                Programador de Informática no IEFP.
            </p>
        </div>

        <div class="certificates-grid">
            <article v-for="certificate in certificates" :key="certificate.title" class="certificate-card">
                <p class="certificate-year">{{ certificate.year }}</p>

                <h3>{{ certificate.title }}</h3>

                <p>{{ certificate.organization }}</p>
            </article>
        </div>
    </section>
</template>

<script setup>
import { certificates } from '../data/certificates'
</script>