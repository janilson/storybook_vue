import type { Meta, StoryObj } from "@storybook/vue3";
import CrmBoard from "../../../src/components/ecosys/templates/CrmBoard.vue";
import { crmPipelineMock } from "../../../src/components/ecosys/mocks/pipeline";

const meta: Meta<typeof CrmBoard> = {
  title: "Ecosys/Templates/Board",
  component: CrmBoard,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    columns: crmPipelineMock,
  },
};

export default meta;
type Story = StoryObj<typeof CrmBoard>;

export const Pipeline: Story = {};
