import type { Meta, StoryObj } from "@storybook/vue3";
import TypographyPreview from "../../src/components/previews/TypographyPreview.vue";

const meta: Meta<typeof TypographyPreview> = {
  title: "Tokens/Typography",
  component: TypographyPreview,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TypographyPreview>;

export const Tipografia: Story = {};
