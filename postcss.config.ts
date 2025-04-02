// postcss.config.js (Ensure the file ends with `.js`)
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss(), autoprefixer()],
};
