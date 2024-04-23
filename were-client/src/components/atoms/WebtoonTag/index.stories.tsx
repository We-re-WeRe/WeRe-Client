import type { Meta, StoryObj } from '@storybook/react';
import WebtoonTag from './index';

const meta = {
  title: 'Components/Atoms/WebtoonTag',
  component: WebtoonTag,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    componentSubtitle: '웹툰 태그를 표시합니다.',
  },

  argTypes: {
    tagName: {
      description: '태그에 text를 넣을 수 있습니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '태그',
        },
      },
    },
    onClick: {
      description: '태그에 기능을 넣을 수 있습니다.',
      table: {
        type: {
          summary: 'void',
        },
      },
    },
    size: {
      description: '태그의 크기를 지정할 수 있습니다.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'small',
        },
      },
    },
    link: {
      description: '태그 클릭 시 이동을 할 수 있습니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    tagRef: {
      description: '태그 스크롤이 필요한 경우 사용합니다.',
      table: {
        type: {
          summary: 'React.LegacyRef<HTMLDivElement>',
        },
      },
    },
    selected: {
      description: '클릭 시 표시를 하기 위해 사용됩니다.',
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
} satisfies Meta<typeof WebtoonTag>;
export default meta;

type Story = StoryObj<typeof WebtoonTag>;

export const Tag: Story = {
  args: { tagName: '태그', size: 'small' },
};
