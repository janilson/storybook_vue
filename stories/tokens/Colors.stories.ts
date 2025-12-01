import type { Meta, StoryObj } from "@storybook/vue3";
import ColorsPreview from "../../src/components/previews/ColorsPreview.vue";

const meta: Meta<typeof ColorsPreview> = {
  title: "Tokens/Cores",
  component: ColorsPreview,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ColorsPreview>;

export const Paleta: Story = {};
