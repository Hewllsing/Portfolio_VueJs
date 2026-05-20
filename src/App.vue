<template>
  <div class="app-wrapper">
    <div class="mouse-glow"></div>
    <CodeBackground />

    <Navbar />

    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </main>

    <Footer />

    <BackToTop />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import Navbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/AppFooter.vue'
import BackToTop from './components/BackToTop.vue'
import CodeBackground from './components/CodeBackground.vue'

onMounted(() => {
  const glow = document.querySelector('.mouse-glow')

  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`
    glow.style.top = `${e.clientY}px`
  })
})
</script>