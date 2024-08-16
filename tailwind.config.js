/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'base-100': 'var(--base-100)',
        'base-200': 'var(--base-200)',
        'base-300': 'var(--base-300)',
        'base-400': 'var(--base-400)',
        'base-500': 'var(--base-500)',
        'base-600': 'var(--base-600)',
        'base-700': 'var(--base-700)',
        'base-800': 'var(--base-800)',
        'base-900': 'var(--base-900)',
        'text-100': 'var(--text-100)',
        'text-200': 'var(--text-200)',
        'text-300': 'var(--text-300)',
        'border-100': 'var(--border-100)',
        'colorPrimary': 'var(--colorPrimary)',
        'colorSuccess': 'var(--colorSuccess)',
        'colorWarning': 'var(--colorWarning)',
        'colorError': 'var(--colorError)',
        'colorLink': 'var(--colorLink)',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '844px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1400px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

