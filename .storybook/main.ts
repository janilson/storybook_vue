import vue from "@vitejs/plugin-vue";
import type { StorybookConfig } from "@storybook/vue3-vite";
import type { Plugin } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const normalizeFileImports = (): Plugin => {
  return {
    name: "normalize-file-imports",
    enforce: "pre",
    resolveId(id, importer) {
      if (id.startsWith("file://")) {
        try {
          const filePath = fileURLToPath(id);
          return filePath;
        } catch {
          const normalized = id.replace(/^file:\/\/+/, "");
          return normalized.startsWith("/") ? normalized : path.resolve(process.cwd(), normalized);
        }
      }
      return null;
    },
  };
};

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
    
    config.plugins.unshift(normalizeFileImports());
    config.plugins.push(vue());
    
    if (!config.resolve) {
      config.resolve = {};
    }
    
    config.resolve.dedupe = config.resolve.dedupe || [];
    if (!config.resolve.dedupe.includes("@storybook/addon-docs")) {
      config.resolve.dedupe.push("@storybook/addon-docs");
    }
    
    return config;
  },
};

export default config;
