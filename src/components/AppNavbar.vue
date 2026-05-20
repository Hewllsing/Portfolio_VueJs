<template>
    <header class="navbar">
        <a href="#home" class="logo">
            <img src="/public/images/logotipo.png" alt="Logo" class="logo-image" />
            Leonardo Souza
            <span>.</span>
        </a>

        <button class="menu-toggle" @click="isOpen = !isOpen">
            ☰
        </button>

        <nav :class="{ open: isOpen }">
            <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :class="{ active: activeSection === link.id }"
                @click="isOpen = false">
                {{ link.label }}
            </a>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('home')

const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
]

const handleScroll = () => {
    const sections = ['home', 'about', 'experience', 'projects', 'certificates', 'contact']

    sections.forEach((section) => {
        const element = document.getElementById(section)

        if (element) {
            const rect = element.getBoundingClientRect()

            if (rect.top <= 120 && rect.bottom >= 120) {
                activeSection.value = section
            }
        }
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>