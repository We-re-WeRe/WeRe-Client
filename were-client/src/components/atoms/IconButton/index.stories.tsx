import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './index';

const meta = {
  title: 'Components/Atoms/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'Icon을 이용한 버튼들의 집합입니다.',
  },

  argTypes: {
    size: {
      description: '아이콘의 크기를 지정할 수 있습니다.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    type: {
      description: '사용할 아이콘을 입력합니다.',
      table: {
        type: {
          summary: 'TIcon',
        },
      },
    },
    onClick: {
      description: '아이콘 클릭 시 사용할 Event를 정의합니다.',
      table: {
        type: {
          summary: 'void',
        },
      },
    },
    link: {
      description: '아이콘 클릭 시 이동이 가능합니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof IconButton>;
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Icon: Story = {
  parameters: {
    docs: {
      description: {
        stroy: 'Icon',
      },
    },
  },
  args: { size: 32, type: 'menu' },
};
