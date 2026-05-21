<template>
    <header class="navbar">
        <a href="#home" class="logo">
            <img src="/images/projects/logotipo.png" alt="Logo" class="logo-image" />
            Leonardo Souza
            <span>.</span>
        </a>

        <button class="menu-toggle" @click="isOpen = !isOpen">
            ☰
        </button>

        <nav :class="{ open: isOpen }">
            <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :class="{ active: activeSection === link.id }"
                @click="closeMenu">
                {{ link.label }}
            </a>
        </nav>
    </header>
</template>

<script setup>
import { useNavbar } from '../scripts/appNavbar.js'

const {
    isOpen,
    activeSection,
    links,
    closeMenu
} = useNavbar()
</script>