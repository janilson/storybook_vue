import type { Meta, StoryObj } from "@storybook/vue3";
import LeadBadgeSummary from "../../../src/components/ecosys/molecules/LeadBadgeSummary.vue";

const meta: Meta<typeof LeadBadgeSummary> = {
  title: "Ecosys/Moléculas/LeadBadgeSummary",
  component: LeadBadgeSummary,
  args: {
    badge: {
      primary: "Modelo B",
      secondary: "BBB-0002",
    },
    extraCount: 3,
  },
};

export default meta;
type Story = StoryObj<typeof LeadBadgeSummary>;

export const ComExtras: Story = {};
