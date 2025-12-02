import type { Meta, StoryObj } from "@storybook/vue3";
import PipelineColumn from "../../../src/components/ecosys/organisms/PipelineColumn.vue";
import { crmPipelineMock } from "../../../src/components/ecosys/mocks/pipeline";

const meta: Meta<typeof PipelineColumn> = {
  title: "Ecosys/Organismos/PipelineColumn",
  component: PipelineColumn,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "gray",
      values: [
        {
          name: "gray",
          value: "#E5E7EB",
        },
      ],
    },
  },
  args: {
    column: crmPipelineMock[0],
  },
};

export default meta;
type Story = StoryObj<typeof PipelineColumn>;

export const Default: Story = {
  args: {
    column: crmPipelineMock[0],
  },
};

export const ComVariosLeads: Story = {
  args: {
    column: crmPipelineMock[0],
  },
};

export const ComPoucosLeads: Story = {
  args: {
    column: crmPipelineMock[1],
  },
};

export const ComLeadsComBadges: Story = {
  args: {
    column: crmPipelineMock[2],
  },
};

export const ComLeadsComHighlightBars: Story = {
  args: {
    column: crmPipelineMock[3],
  },
};

export const ColunaVazia: Story = {
  args: {
    column: {
      id: "stage-empty",
      title: "Coluna Vazia",
      amount: "R$ 0,00",
      leadsCount: 0,
      leads: [],
    },
  },
};

export const ComUmLead: Story = {
  args: {
    column: crmPipelineMock[4],
  },
};

