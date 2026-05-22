<template>
  <section id="certificates" class="section certificates" data-aos="fade-up">
    <div class="section-header">
      <p class="section-tag">Certificates</p>

      <h2>Certificados & Formação</h2>

      <p>
        Ao longo da minha jornada em Tecnologia da Informação, venho desenvolvendo competências através de cursos
        técnicos, certificações e formações práticas em diversas áreas do desenvolvimento de software. Esta secção reúne
        os principais conhecimentos adquiridos em programação, desenvolvimento web, bases de dados, redes, arquitetura
        de sistemas e tecnologias modernas.
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
