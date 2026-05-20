<template>
    <div class="code-background">
        <span v-for="n in 40" :key="n" class="code-line" :style="randomStyle()">
            {{ randomCode() }}
        </span>
    </div>
</template>

<script setup>
const snippets = [
    'const app = createApp()',
    'SELECT * FROM users',
    'public class Program',
    'if (user != null)',
    'npm run dev',
    'System.out.println()',
    'return Ok()',
    'import Vue from "vue"',
    'await connection.OpenAsync()',
    'git push origin main',
    'function login()',
    'CREATE TABLE projects',
    'db.SaveChanges()',
    'router.get("/")',
    'async Task<IActionResult>'
]

const randomCode = () => {
    return snippets[Math.floor(Math.random() * snippets.length)]
}

const randomStyle = () => {
    return {
        left: Math.random() * 100 + '%',
        animationDuration: 10 + Math.random() * 15 + 's',
        animationDelay: Math.random() * 5 + 's',
        fontSize: 12 + Math.random() * 8 + 'px'
    }
}
</script>