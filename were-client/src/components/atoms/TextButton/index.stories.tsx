import type { Meta, StoryObj } from '@storybook/react';
import TextButton from './index';

const meta = {
  title: 'Components/Atoms/Buttons/TextButton',
  component: TextButton,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '지정된 텍스트에 따른 버튼 컴포넌트입니다.',
  },

  argTypes: {
    children: {
      description: 'Button의 Text를 작성할 수 있습니다.',
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: {
          summary: 'text',
        },
      },
    },
    onClick: {
      description: 'Event를 적용할 수 있습니다.',
      table: {
        type: {
          summary: 'void',
        },
      },
    },
    disabled: {
      description: '클릭이 불가능하도록 설정할 수 있습니다.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    type: {
      description: 'Button의 형식을 지정할 수 있습니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'button',
        },
      },
    },
    link: {
      description: 'Button 클릭 시 이동되는 경로를 지정할 수 있습니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      description: '정형화된 Text 규격을 따르기 위해 사이즈를 3가지로 정하였습니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    bold: {
      description: '클릭된 Button을 가시화할 수 있습니다.',
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
} satisfies Meta<typeof TextButton>;
export default meta;

type Story = StoryObj<typeof TextButton>;

export const Text: Story = {
  args: { children: 'Normal', size: 'medium' },
};
