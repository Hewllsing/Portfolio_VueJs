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

        <div class="certificates-list">
            <article v-for="certificate in certificates" :key="certificate.title" class="certificate-item">
                <div class="certificate-content">

                    <p class="certificate-year">
                        {{ certificate.year }}
                    </p>

                    <h3>
                        {{ certificate.title }}
                    </h3>

                    <p class="certificate-organization">
                        {{ certificate.organization }}
                    </p>

                    <p class="certificate-description">
                        {{ certificate.description }}
                    </p>

                </div>

                <img :src="certificate.image" :alt="certificate.title" class="certificate-image" />
            </article>
        </div>
    </section>
</template>

<script setup>
import { certificates } from '../data/certificates'
</script>