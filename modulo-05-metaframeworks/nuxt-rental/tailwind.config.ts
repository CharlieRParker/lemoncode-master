import type { Config } from 'tailwindcss';

export default {
    content: [
        './components/**/*.vue',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.ts',
        './app.vue',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config;
