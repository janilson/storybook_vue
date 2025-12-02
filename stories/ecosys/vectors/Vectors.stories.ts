import type { Meta, StoryObj } from "@storybook/vue3";
import VectorsGallery from "./VectorsGallery.vue";

const meta: Meta<typeof VectorsGallery> = {
  title: "Ecosys/Vetores",
  component: VectorsGallery,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Galeria de todos os vetores (ícones SVG) disponíveis no sistema Ecosys-ui. Os vetores são detectados automaticamente da pasta `src/components/ecosys/vectors/` - basta adicionar um novo arquivo .vue na pasta e ele aparecerá automaticamente na galeria.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VectorsGallery>;

export const Todos: Story = {};
