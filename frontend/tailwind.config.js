/** @type {import('tailwindcss').Config} */
module.exports = {
    // `overline` is a Tailwind utility; without this an app's own eyebrow-label class draws a line above the text.
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        mint: {
          50: '#F4FAF7',
          100: '#EFF8F5',
          200: '#E6F4F0',
          300: '#D5EDE8',
          border: '#D6ECE7'
        },
        teal: {
          50: '#EFF8F5',
          100: '#D5EDE8',
          200: '#BFE3DC',
          300: '#8FCBC2',
          400: '#1B7E78',
          500: '#177C76',
          600: '#0D5C58',
          700: '#0A4946',
          800: '#083C39',
          900: '#06302D'
        },
        coral: {
          50: '#FFF3F1',
          100: '#FFEBE8',
          200: '#FFB8AF',
          300: '#FF8C7C',
          400: '#FF6B57',
          500: '#FF6B57',
          600: '#E85642'
        },
        ink: '#1E3330',
        mutedteal: '#567A75'
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        script: ['Caveat', 'cursive']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(13, 92, 88, 0.06)',
        lift: '0 18px 40px -12px rgba(13, 92, 88, 0.18)',
        coral: '0 10px 25px -8px rgba(255, 107, 87, 0.45)',
        bubble: '0 12px 30px -10px rgba(13, 92, 88, 0.15)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};