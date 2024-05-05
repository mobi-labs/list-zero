/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}','./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'grey-scale': {
                    'grey-10': '#262626',
                    'grey-09': '#484848',
                    'grey-08': '#676767',
                    'grey-07': '#7b7b7b',
                    'grey-06': '#a5a5a5',
                    'grey-05': '#c3c3c3',
                    'grey-04': '#e5e5e5',
                    'grey-03': '#f1f1f1',
                    'grey-02': '#f6f6f6',
                    'grey-01': '#fbfbfb',
                    'white': '#ffffff'
                },
                'text': {
                    'primary': '#262626',
                    'paragraph01': '#676767',
                    'paragraph02': '#7b7b7b',
                    'secondary': '#a5a5a5',
                    'hint-disabled': '#c3c3c3'
                },
                'border': {'border': '#e5e5e5'},
                'divider': {'divider-01': '#e5e5e5', 'divider-02': '#f6f6f6'},
                'red': {
                    'red-01': '#fef2f2',
                    'red-02': '#fee2e2',
                    'red-03': '#fecaca',
                    'red-04': '#fca5a5',
                    'red-05': '#f87171',
                    'red-06': '#ef4444',
                    'red-07': '#dc2626'
                },
                'yellow': {
                    'yellow-01': '#fefce8',
                    'yellow-02': '#fef9c3',
                    'yellow-03': '#fef08a',
                    'yellow-04': '#fde047',
                    'yellow-05': '#facc15',
                    'yellow-06': '#eab308',
                    'yellow-07': '#ca8a04'
                },
                'green': {
                    'green-01': '#f0fdf4',
                    'green-02': '#dcfce7',
                    'green-03': '#bbf7d0',
                    'green-04': '#86efac',
                    'green-05': '#4ade80',
                    'green-06': '#22c55e',
                    'green-07': '#16a34a'
                },
                'blue': {
                    'blue-01': '#eff6ff',
                    'blue-02': '#dbeafe',
                    'blue-03': '#bfdbfe',
                    'blue-04': '#93c5fd',
                    'blue-05': '#60a5fa',
                    'blue-06': '#3b82f6',
                    'blue-07': '#2563eb'
                },
                'indigo': {
                    'indigo-01': '#eef2ff',
                    'indigo-02': '#e0e7ff',
                    'indigo-03': '#c7d2fe',
                    'indigo-04': '#a5b4fc',
                    'indigo-05': '#818cf8',
                    'indigo-06': '#6366f1',
                    'indigo-07': '#4f46e5'
                },
                'purple': {
                    'purple-01': '#faf5ff',
                    'purple-02': '#f3e8ff',
                    'purple-03': '#e9d5ff',
                    'purple-04': '#d8b4fe',
                    'purple-05': '#c084fc',
                    'purple-06': '#a855f7',
                    'purple-07': '#9333ea'
                },
                'pink': {
                    'pink-01': '#fdf2f8',
                    'pink-02': '#fce7f3',
                    'pink-03': '#fbcfe8',
                    'pink-04': '#f9a8d4',
                    'pink-05': '#f472b6',
                    'pink-06': '#ec4899',
                    'pink-07': '#db2777'
                },
                'positive': {
                    'positive-01': '#61eeaa',
                    'positive-02': '#39d979',
                    'positive-03': '#06c268',
                    'positive-04': '#05a662'
                },
                'negative': {
                    'negative-01': '#ff8c8c',
                    'negative-02': '#ff5c5c',
                    'negative-03': '#ff4a4a',
                    'negative-04': '#ec3939'
                }
            },
            fontSize: {
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
            fontFamily: {'pretendard': 'Pretendard'},
            boxShadow: {
                'shadow-01': '0px 0px 4px 0px rgba(0,0,0,0.1)',
                'shadow-02': '0px 0px 6px 0px rgba(0,0,0,0.12)',
                'shadow-03': '0px 0px 8px 0px rgba(0,0,0,0.12)',
                'shadow-04': '0px 1px 6px 0px rgba(0,0,0,0.14)',
                'shadow-05': '0px 2px 8px 0px rgba(0,0,0,0.16)'
            },
            borderRadius: {
                'none': '0',
                'xs': '0.0625rem',
                'sm': '0.06875000149011612rem',
                'default': '0.125rem',
                'lg': '0.1666666716337204rem',
                'xl': '0.1875rem',
                '2xl': '0.25rem',
                '3xl': '0.3125rem',
                '4xl': '0.375rem',
                '5xl': '0.5rem',
                '6xl': '0.625rem',
                '7xl': '1rem',
                '8xl': '1.5rem',
                '9xl': '2.5rem',
                '10xl': '3.125rem',
                'full': '9999px'
            }
        },
    },
    plugins: [],
}
