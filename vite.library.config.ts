import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import type { Plugin } from "vite";

const libEntry = resolve(__dirname, "src/index.ts");

const fixVueImports = (): Plugin => {
  let defaultImportName: string | null = null;
  
  return {
    name: "fix-vue-imports",
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach((fileName) => {
        const chunk = bundle[fileName];
        if (chunk && chunk.type === "chunk" && "code" in chunk && chunk.code) {
          chunk.code = chunk.code.replace(
            /import\s+([\w$]+),\s*(\{[^}]+\})\s+from\s+["']vue["']/g,
            (_match: string, defaultVar: string, namedImports: string) => {
              defaultImportName = defaultVar;
              return `import ${namedImports} from 'vue'`;
            }
          );
          
          chunk.code = chunk.code.replace(
            /import\s+([\w$]+)\s+from\s+["']vue["']\s*;?\s*/g,
            (_match: string, defaultVar: string) => {
              defaultImportName = defaultVar;
              return "";
            }
          );
          
          chunk.code = chunk.code.replace(
            /import\s+([\w$]+),\s*(\{[^}]+\})\s+from\s+['"]vue['"]/g,
            (_match: string, defaultVar: string, namedImports: string) => {
              defaultImportName = defaultVar;
              return `import ${namedImports} from 'vue'`;
            }
          );
          
          if (defaultImportName) {
            const regex = new RegExp(`\\b${defaultImportName}\\b`, 'g');
            chunk.code = chunk.code.replace(regex, 'undefined');
            defaultImportName = null; // Reset para próximo chunk
          }
        }
      });
    },
  };
};

export default defineConfig({
  plugins: [
    vue(),
    fixVueImports(),
  ],
  build: {
    lib: {
      entry: libEntry,
      name: "EcosysUI",
      fileName: (format) => `ecosys-ui.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: (id) => {
        return (
          id === "vue" ||
          id === "vue-router" ||
          id === "vuedraggable" ||
          id.startsWith("vue/")
        );
      },
      output: [
        {
          format: "es",
          entryFileNames: "ecosys-ui.es.js",
          preserveModules: false,
          generatedCode: {
            constBindings: true,
          },
        },
        {
          format: "cjs",
          entryFileNames: "ecosys-ui.cjs.js",
          preserveModules: false,
          globals: {
            vue: "Vue",
            "vue-router": "VueRouter",
          },
        },
      ],
    },
    sourcemap: true,
    emptyOutDir: false,
  },
});

