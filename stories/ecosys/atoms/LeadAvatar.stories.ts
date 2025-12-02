import type { Meta, StoryObj } from "@storybook/vue3";
import LeadAvatar from "../../../src/components/ecosys/atoms/LeadAvatar.vue";

const meta: Meta<typeof LeadAvatar> = {
  title: "Ecosys/Átomos/LeadAvatar",
  component: LeadAvatar,
  args: {
    name: "João Paulo",
  },
};

export default meta;
type Story = StoryObj<typeof LeadAvatar>;

export const Default: Story = {};
