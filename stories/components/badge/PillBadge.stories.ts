import type { Meta, StoryObj } from '@storybook/vue3'
import PillBadge from '../../../src/components/atoms/badge/pill-badge/PillBadge.vue'

const meta: Meta<typeof PillBadge> = {
  title: 'Atoms/PillBadge',
  component: PillBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
  customColor: { control: 'color' },
      token: { control: 'text' },
     textColor: { control: 'color' },
          outline: { control: 'boolean' },
  size: { 
    control: 'select',
    options: ['sm', 'md', 'lg']
  }
},
args: {
  token: 'green.700',
  size: 'md',
  customColor: undefined
}


}

export default meta

export const Default: StoryObj<typeof PillBadge> = {
  render: (args) => ({
    components: { PillBadge },
    setup() {
      return { args }
    },
    template: `<PillBadge v-bind="args">Pré-venda</PillBadge>`
  })
}
