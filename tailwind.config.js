// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js;

import { colors } from "./src/tokens/colors";

export default {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./stories/**/*.{vue,js,ts,mdx}",
    "./.storybook/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors,
    },
  },

  plugins: [],
};
