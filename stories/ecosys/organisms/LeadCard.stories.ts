import type { Meta, StoryObj } from "@storybook/vue3";
import LeadCard from "../../../src/components/ecosys/organisms/LeadCard.vue";

const meta: Meta<typeof LeadCard> = {
  title: "Ecosys/Organismos/LeadCard",
  component: LeadCard,
  args: {
    lead: {
      id: "lead-alpha",
      name: "Lead Exemplo",
      owners: [
        { name: "João Paulo" },
        { name: "Roberto Carlos" },
      ],
      contactInfo: "00 90000-0000",
      contactTone: "default",
      statusLabel: "2 dias",
      statusTone: "alert",
      borderTone: "alert",
      badge: { primary: "Modelo F", secondary: "FFF-0006" },
      highlightBars: [
        { color: "#B91C1C" },
        { color: "#9CA3AF" },
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof LeadCard>;

export const Default: Story = {};
