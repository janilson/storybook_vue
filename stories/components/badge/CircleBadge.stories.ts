import type { Meta, StoryObj } from '@storybook/vue3'
import CircleBadge from '../../../src/components/atoms/badge/circle-badge/CircleBadge.vue'

const meta: Meta<typeof CircleBadge> = {
  title: 'Atoms/CircleBadge',
  component: CircleBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    customColor: { control: 'color' },
    outline: { control: 'boolean' },
    token: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    borderWidth: { control: 'number', min: 1, max: 5 }
  },
  args: {
    token: 'green.700',
    size: 'md',
    outline: false,
    borderWidth: 2,
    customColor: undefined
  }
}
export default meta

export const Default: StoryObj<typeof CircleBadge> = {
  render: (args) => ({
    components: { CircleBadge },
    setup() { return { args } },
    template: '<CircleBadge v-bind="args" />'
  })
}

export const Outline: StoryObj<typeof CircleBadge> = {
  render: (args) => ({
    components: { CircleBadge },
    setup() { return { args } },
    template: '<CircleBadge v-bind="args" />'
  }),
  args: { outline: true }
}

export const DifferentSizes: StoryObj<typeof CircleBadge> = {
  render: () => ({
    components: { CircleBadge },
    template: `
      <div class="flex gap-4 items-center">
        <CircleBadge size="sm" />
        <CircleBadge size="md" />
        <CircleBadge size="lg" />
      </div>
    `
  })
}

export const CustomColor: StoryObj<typeof CircleBadge> = {
  render: (args) => ({
    components: { CircleBadge },
    setup() { return { args } },
    template: '<CircleBadge v-bind="args" />'
  }),
  args: { customColor: '#FF5733' }
}
