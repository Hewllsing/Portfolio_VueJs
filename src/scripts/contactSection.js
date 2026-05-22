
import { reactive, ref } from 'vue'

export function useContactForm() {
    const form = reactive({
        name: '',
        email: '',
        message: ''
    })

    const errorMessage = ref('')
    const successMessage = ref('')

    const sendMessage = () => {
        errorMessage.value = ''
        successMessage.value = ''

        if (!form.name || !form.email || !form.message) {
            errorMessage.value = 'Preenche todos os campos antes de enviar.'
            return
        }

        const subject = `Contacto do portefólio - ${form.name}`

        const body = `
Nome: ${form.name}
Email: ${form.email}

Mensagem:
${form.message}
    `

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=leonardo23s.pt@gmail.com&su=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`

        window.open(gmailUrl, '_blank')

        successMessage.value = 'A abrir o Gmail...'
    }

    return {
        form,
        errorMessage,
        successMessage,
        sendMessage
    }
}

