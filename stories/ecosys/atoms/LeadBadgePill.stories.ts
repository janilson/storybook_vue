import type { Meta, StoryObj } from "@storybook/vue3";
import LeadBadgePill from "../../../src/components/ecosys/atoms/LeadBadgePill.vue";

const meta: Meta<typeof LeadBadgePill> = {
  title: "Ecosys/Átomos/LeadBadgePill",
  component: LeadBadgePill,
  args: {
    primary: "Modelo A",
    secondary: "AAA-0001",
    extraCount: 2,
  },
};

export default meta;
type Story = StoryObj<typeof LeadBadgePill>;

export const Default: Story = {};
