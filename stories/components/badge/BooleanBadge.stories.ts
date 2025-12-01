import type { Meta, StoryObj } from "@storybook/vue3";
import BooleanBadge from "../../../src/components/atoms/badge/boolean-badge/BooleanBadge.vue";

const meta: Meta<typeof BooleanBadge> = {
  title: "Atoms/BooleanBadge",
  component: BooleanBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"]
    },
    color: { control: "color" },
    value: { control: "boolean" }
  },
  args: {
    value: true,
    size: "md",
    color: "blue.700"
  }
}

export default meta

export const Default: StoryObj<typeof BooleanBadge> = {
  render: (args) => ({
    components: { BooleanBadge },
    setup() {
      return { args }
    },
    template: `<BooleanBadge v-bind="args"></BooleanBadge>`
  })
}












