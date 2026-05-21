
import { ref, onMounted, onUnmounted } from 'vue'

export function useNavbar() {
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

    const closeMenu = () => {
        isOpen.value = false
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return {
        isOpen,
        activeSection,
        links,
        closeMenu
    }
}