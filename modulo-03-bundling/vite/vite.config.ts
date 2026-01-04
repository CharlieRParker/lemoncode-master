import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        compression({
            algorithm: 'gzip',
            ext: '.gz'
        }),
        compression({
            algorithm: 'brotliCompress',
            ext: '.br'
        })
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
})