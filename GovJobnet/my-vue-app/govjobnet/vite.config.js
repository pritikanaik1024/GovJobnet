import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve'; // Assuming you want to resolve node modules
{
  server: {
    host: '127.0.0.1'
  }
}
// Additional Rollup plugins
import commonjs from '@rollup/plugin-commonjs'; // For converting CommonJS modules to ES6
export default defineConfig({
    base: '/profile/',
    plugins: [
    react(),
    commonjs(), // use CommonJS plugin
    nodeResolve({
      browser: true, // for browser modules resolution
    }),
  ],
  build: {
    rollupOptions: {
      // Rollup specific options go here
      input: '/path/to/main.js', // Ensure this path is correct
      output: {
        format: 'es',
      },
    },
  },
});
