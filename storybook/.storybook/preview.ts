import '../global.css';
import { themes } from '@storybook/theming';
import { DocsContainer } from './docs-container';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
  },
  docs: {
    container: DocsContainer,
    source: {
      excludeDecorators: true,
    },
  },
};
