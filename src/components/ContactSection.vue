<template>
    <section id="contact" class="section contact" data-aos="fade-up">
        <div class="section-header">
            <p class="section-tag">Contact</p>
            <h2>Vamos trabalhar juntos?</h2>
            <p>
                Estou disponível para oportunidades de Software developer, projetos e networking
                na área de desenvolvimento de software.
            </p>
        </div>

        <div class="contact-container">
            <div class="contact-info">
                <h3>Contacto direto</h3>

                <p>
                    Se quiseres falar comigo sobre uma oportunidade, projeto ou colaboração,
                    podes entrar em contacto pelos links abaixo.
                </p>

                <div class="contact-links">
                    <a href="mailto:leonardo23s.pt@gmail.com">Email</a>
                    <a href="https://github.com/Hewllsing" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/Ldosouza/" target="_blank">LinkedIn</a>
                    <a href="/cv/Leonardo-Souza-CV.pdf" target="_blank">Download CV</a>
                </div>
            </div>

            <form class="contact-form" @submit.prevent="sendMessage">
                <input v-model="form.name" type="text" placeholder="O teu nome" />
                <input v-model="form.email" type="email" placeholder="O teu email" />
                <textarea v-model="form.message" placeholder="A tua mensagem"></textarea>

                <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
                <p v-if="successMessage" class="form-success">{{ successMessage }}</p>

                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { useContactForm } from '../scripts/contactSection.js'

const {
    form,
    errorMessage,
    successMessage,
    sendMessage
} = useContactForm()
</script>