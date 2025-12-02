import type { Meta, StoryObj } from "@storybook/vue3";
import LeadAvatarGroup from "../../../src/components/ecosys/molecules/LeadAvatarGroup.vue";

const meta: Meta<typeof LeadAvatarGroup> = {
  title: "Ecosys/Moléculas/LeadAvatarGroup",
  component: LeadAvatarGroup,
  args: {
    owners: [
      { name: "João Paulo" },
      { name: "Roberto Carlos" },
      { name: "Ana Lima" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LeadAvatarGroup>;

export const Trio: Story = {};
