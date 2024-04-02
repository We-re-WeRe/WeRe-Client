import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // StoryBook에 사용할 .mdx, .stories 위치
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // 적용할 addon
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  // framework 종류
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // docs 관련
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    if (!config.module || !config.module.rules) {
      return config;
    }

    config.module.rules = [
      ...config.module.rules.map(rule => {
        if (!rule || rule === '...') {
          return rule;
        }

        if (rule.test && /svg/.test(String(rule.test))) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
  staticDirs: ['..\\public'],
};
export default config;
