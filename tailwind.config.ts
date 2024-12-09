import { nextui, colors } from '@nextui-org/react'
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
              DEFAULT: '#f43f5e',
              foreground: '#000000'
            }
          }
        }
      }
    })
  ]
}
export default config
