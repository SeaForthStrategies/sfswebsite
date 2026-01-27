/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#2A7C84',
          yellow: '#D5A353',
        },
        neutral: {
          950: '#0B0F12',
          800: '#1F2937',
          600: '#4B5563',
          200: '#E5E7EB',
          100: '#F3F4F6',
        },
        white: '#FFFFFF',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.04)',
        md: '0 4px 10px rgba(0, 0, 0, 0.08)',
        lg: '0 10px 25px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};


