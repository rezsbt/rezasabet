import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      },
      spacing: {
        header: '4rem',
        footer: '4rem'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'light',
      layout: {
        radius: {
          small: '3px',
          medium: '4px',
          large: '7px'
        }
      },
      themes: {
        dark: {
          colors: {
            background: {
              '100': '#0C0C0C',
              '200': '#000000'
            },
            primary: {
              DEFAULT: '#ffffff',
              foreground: '#000000'
            },
            secondary: {
              DEFAULT: '#ffd60a',
              foreground: '#000000',
              '100': '#f0db8d',
              '200': '#edd578',
              '300': '#ebce5f',
              '400': '#e8c842',
              '500': '#ffd60a',
              '600': '#c8a707',
              '700': '#ab8f05',
              '800': '#8e7703',
              '900': '#735f02'
            }
          }
        }
      }
    })
  ]
}
export default config
