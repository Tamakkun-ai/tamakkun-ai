import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdeed5',
          200: '#fbd9aa',
          300: '#f9be74',
          400: '#f59e41', // Main brand color
          500: '#f2881a',
          600: '#e36d0f',
          700: '#bc520e',
          800: '#964214',
          900: '#7a3713',
          950: '#421a08',
        },
        dark: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f59e41 0%, #f2881a 50%, #e36d0f 100%)',
        'gradient-primary-radial': 'radial-gradient(circle at center, #f59e41 0%, #e36d0f 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, rgba(245, 158, 65, 0.1) 0%, rgba(227, 109, 15, 0.1) 100%)',
        'gradient-glow': 'linear-gradient(135deg, #f59e41 0%, #f2881a 50%, #f59e41 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(245, 158, 65, 0.5)',
        'glow-primary-lg': '0 0 40px rgba(245, 158, 65, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
