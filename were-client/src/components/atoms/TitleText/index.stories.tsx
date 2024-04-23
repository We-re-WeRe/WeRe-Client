import type { Meta, StoryObj } from '@storybook/react';
import TitleText from './index';

const meta = {
  title: 'Components/Atoms/Texts/TitleText',
  component: TitleText,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '컨테이너에서 가장 제목을 담당하는 텍스트의 경우 사용합니다.',
  },

  argTypes: {
    children: {
      description: 'text를 넣어는 값입니다.',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    size: {
      description: 'text의 크기를 2가지로 정해주는 값입니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    color: {
      description: 'text의 색깔을 2가지로 정해주는 값입니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'black',
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TitleText>;

export const Title: Story = {
  args: { children: 'Title', size: 'medium' },
};
