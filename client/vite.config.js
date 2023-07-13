import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/register-login-mongodb-server-react/",
  plugins: [react()],
})
