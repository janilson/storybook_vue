import vue from "@vitejs/plugin-vue";
import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  staticDirs: ["../public"],

  managerHead: (head) => `
  ${head}
  <link rel="icon" sizes="180x180" type="image/x-icon" href="favicon.ico" />
`,

  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(vue());
    return config;
  },
};

export default config;
