import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        fairyPink: '#ff77c8',
        lavenderMist: '#f4e8ff',
        skyCandy: '#d7f3ff',
        mintGlow: '#d8ffe7'
      },
      boxShadow: {
        sparkle: '0 12px 40px rgba(255, 119, 200, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
