/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}','./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'grey-scale': {
                    10: '#262626',
                    9: '#484848',
                    8: '#676767',
                    7: '#7b7b7b',
                    6: '#a5a5a5',
                    5: '#c3c3c3',
                    4: '#e5e5e5',
                    3: '#f1f1f1',
                    2: '#f6f6f6',
                    1: '#fbfbfb',
                    white: '#ffffff'
                },
                'text': {
                    primary: '#262626',
                    paragraph01: '#676767',
                    paragraph02: '#7b7b7b',
                    secondary: '#a5a5a5',
                    "hint-disabled": '#c3c3c3'
                },
                'border': {border: '#e5e5e5'},
                'divider': {
                    1: '#e5e5e5',
                    2: '#f6f6f6'
                },
                'red': {
                    1: '#fef2f2',
                    2: '#fee2e2',
                    3: '#fecaca',
                    4: '#fca5a5',
                    5: '#f87171',
                    6: '#ef4444',
                    7: '#dc2626'
                },
                'yellow': {
                    1: '#fefce8',
                    2: '#fef9c3',
                    3: '#fef08a',
                    4: '#fde047',
                    5: '#facc15',
                    6: '#eab308',
                    7: '#ca8a04'
                },
                'green': {
                    1: '#f0fdf4',
                    2: '#dcfce7',
                    3: '#bbf7d0',
                    4: '#86efac',
                    5: '#4ade80',
                    6: '#22c55e',
                    7: '#16a34a'
                },
                'blue': {
                    1: '#eff6ff',
                    2: '#dbeafe',
                    3: '#bfdbfe',
                    4: '#93c5fd',
                    5: '#60a5fa',
                    6: '#3b82f6',
                    7: '#2563eb'
                },
                'indigo': {
                    1: '#eef2ff',
                    2: '#e0e7ff',
                    3: '#c7d2fe',
                    4: '#a5b4fc',
                    5: '#818cf8',
                    6: '#6366f1',
                    7: '#4f46e5'
                },
                'purple': {
                    1: '#faf5ff',
                    2: '#f3e8ff',
                    3: '#e9d5ff',
                    4: '#d8b4fe',
                    5: '#c084fc',
                    6: '#a855f7',
                    7: '#9333ea'
                },
                'pink': {
                    1: '#fdf2f8',
                    2: '#fce7f3',
                    3: '#fbcfe8',
                    4: '#f9a8d4',
                    5: '#f472b6',
                    6: '#ec4899',
                    7: '#db2777'
                },
                'positive': {
                    1: '#61eeaa',
                    2: '#39d979',
                    3: '#06c268',
                    4: '#05a662'
                },
                'negative': {
                    1: '#ff8c8c',
                    2: '#ff5c5c',
                    3: '#ff4a4a',
                    4: '#ec3939'
                }
            },
            boxShadow: {
                'shadow-01': '0px 0px 4px 0px rgba(0,0,0,0.1)',
                'shadow-02': '0px 0px 6px 0px rgba(0,0,0,0.12)',
                'shadow-03': '0px 0px 8px 0px rgba(0,0,0,0.12)',
                'shadow-04': '0px 1px 6px 0px rgba(0,0,0,0.14)',
                'shadow-05': '0px 2px 8px 0px rgba(0,0,0,0.16)'
            },
            borderRadius: {
                none: '0',
                xs: '0.0625rem',
                sm: '0.06875000149011612rem',
                default: '0.125rem',
                lg: '0.1666666716337204rem',
                xl: '0.1875rem',
                '2xl': '0.25rem',
                '3xl': '0.3125rem',
                '4xl': '0.375rem',
                '5xl': '0.5rem',
                '6xl': '0.625rem',
                '7xl': '1rem',
                '8xl': '1.5rem',
                '9xl': '2.5rem',
                '10xl': '3.125rem',
                full: '9999px'
            },
            fontFamily: {
                pretendard: ['Pretendard', 'sans-serif'],
            },
            fontSize: {
                h1: ['26px', { lineHeight: '31.2px' }],
                h2: ['24px', { lineHeight: '28.8px' }],
                h3: ['20px', { lineHeight: '24px' }],
                subtitle1: ['18px', { lineHeight: '21.6px' }],
                subtitle2: ['16px', { lineHeight: '19.2px' }],
                subtitle3: ['14px', { lineHeight: '16.8px' }],
                subtitle4: ['12px', { lineHeight: '14.4px' }],
                body1: ['20px', { lineHeight: '24px' }],
                body2: ['18px', { lineHeight: '21.6px' }],
                body3: ['18px', { lineHeight: '28.8px' }],
                body4: ['16px', { lineHeight: '19.2px' }],
                body5: ['16px', { lineHeight: '25.6px' }],
                body6: ['15px', { lineHeight: '18px' }],
                caption1: ['14px', { lineHeight: '16.8px' }],
                caption2: ['14px', { lineHeight: '16.8px' }],
                caption3: ['13px', { lineHeight: '15.6px' }],
                caption4: ['12px', { lineHeight: '14.4px' }],
                caption5: ['12px', { lineHeight: '14.4px' }],
                '3xs': '0.75rem',
                '2xs': '0.8125rem',
                'xs': '0.875rem',
                'sm': '0.9375rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.625rem'
            },
            fontWeight: {
                bold: 700,
                semibold: 500,
                normal: 400,
            },
            letterSpacing: {
                tighter: '-0.2px',
            },
        },
    },
    plugins: [],
}
