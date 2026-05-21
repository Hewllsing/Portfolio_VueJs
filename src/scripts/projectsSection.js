

import { computed, ref } from 'vue'
import { projects } from '../data/projects'

export function useProjectsSection() {
    const selectedFilter = ref('Todos')

    const filters = computed(() => {
        const technologies = projects.flatMap(
            (project) => project.technologies
        )

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

    return {
        selectedFilter,
        filters,
        filteredProjects
    }
}