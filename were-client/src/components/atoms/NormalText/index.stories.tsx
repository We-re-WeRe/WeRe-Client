import type { Meta, StoryObj } from '@storybook/react';
import NormalText from './index';

const meta = {
  title: 'Components/Atoms/Texts/NormalText',
  component: NormalText,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'WeRe Service의 전반적인 Text 타입을 지정합니다.',
  },

  argTypes: {
    children: {
      description: 'text를 작성하는 값입니다.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    size: {
      description: 'text의 사이즈를 5가지로 지정하여 사용합니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'md',
        },
      },
    },
    bold: {
      description: 'text의 굵기를 정하는 boolean값입니다.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    color: {
      description: 'text의 색깔을 4가지 중 하나를 적용하는 값입니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'black',
        },
      },
    },
    underline: {
      description: 'text의 밑줄을 정하는 boolean값입니다.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    description: {
      description: '많은 글을 작성하는 설명이 필요한 text의 경우 사용하는 boolean값입니다.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof NormalText>;
export default meta;

type Story = StoryObj<typeof NormalText>;

export const Normal: Story = {
  args: { children: 'text' },
};
