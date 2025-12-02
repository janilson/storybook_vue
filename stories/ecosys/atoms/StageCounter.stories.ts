import type { Meta, StoryObj } from "@storybook/vue3";
import StageCounter from "../../../src/components/ecosys/atoms/StageCounter.vue";

const meta: Meta<typeof StageCounter> = {
  title: "Ecosys/Átomos/StageCounter",
  component: StageCounter,
  args: {
    value: 5,
  },
};

export default meta;
type Story = StoryObj<typeof StageCounter>;

export const Default: Story = {};
