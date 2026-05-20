<!-- src/components/BackToTop.vue -->
<template>
    <button v-show="isVisible" class="back-to-top" @click="scrollToTop">
        ↑
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
    isVisible.value = window.scrollY > 500
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>