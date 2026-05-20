<template>
    <section id="projects" class="section projects" data-aos="fade-up">
        <div class="section-header">
            <p class="section-tag">Projects</p>
            <h2>Projetos em destaque</h2>
            <p>
                Alguns projetos desenvolvidos durante a minha formação, prática pessoal
                e evolução como desenvolvedor.
            </p>
        </div>

        <div class="filters">
            <button v-for="tech in filters" :key="tech" :class="{ active: selectedFilter === tech }"
                @click="selectedFilter = tech">
                {{ tech }}
            </button>
        </div>

        <div class="projects-grid">
            <article v-for="project in filteredProjects" :key="project.title" class="project-card" data-aos="zoom-in">
                <img :src="project.image" :alt="project.title" class="project-image" />

                <div>
                    <p class="project-label">Projeto</p>
                    <h3>{{ project.title }}</h3>
                    <p class="project-description">{{ project.description }}</p>
                </div>

                <div class="tech-list">
                    <span v-for="tech in project.technologies" :key="tech">
                        {{ tech }}
                    </span>
                </div>

                <div class="project-links">
                    <a :href="project.github" target="_blank">GitHub</a>

                    <a v-if="project.demo" :href="project.demo" target="_blank">
                        Demo
                    </a>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { projects } from '../data/projects'

const selectedFilter = ref('Todos')

const filters = computed(() => {
    const technologies = projects.flatMap((project) => project.technologies)
    return ['Todos', ...new Set(technologies)]
})

const filteredProjects = computed(() => {
    if (selectedFilter.value === 'Todos') {
        return projects
    }

    return projects.filter((project) =>
        project.technologies.includes(selectedFilter.value)
    )
})
</script>