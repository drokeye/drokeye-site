import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    content: [
        // Add paths to your template files here
        './src/**/*.{js,ts,jsx,tsx,html}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        typography,
    ],
};

export default config;