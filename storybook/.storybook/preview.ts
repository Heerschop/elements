import type { Preview } from '@storybook/react';
import '../src/global.css';
import { themes } from '@storybook/theming';
import { StoryContext } from '@storybook/types';
import { colorThemes } from '../src/common';

function sanitise(source: string): string {
  const patterns = [
    // [/\s\w+\=false/g, ''], // Removes all attributes with a value of "false"
    // [/(\s)(\w+)\=true/g, '$1$2'], // Removes the value of attributes which are "true"
    [/\{(\d+)\}/g, '"$1"'], // Replace {8} for "8"
  ];

  for (const [pattern, value] of patterns) {
    source = source.replace(pattern, value as string);
  }

  return source;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
      source: {
        // transformSource: (source: string, storyContext: StoryContext) =>
        //   storyContext.viewMode === 'docs' ? storyContext.undecoratedStoryFn(storyContext) : sanitise(source),
        transformSource: (source: string, storyContext: StoryContext) => sanitise(source),
        excludeDecorators: true,
      },
    },
  },
};

const rootElement = document.querySelector<HTMLElement>(':root');

if (rootElement) {
  for (const [key, value] of Object.entries(colorThemes['theme-1'])) {
    rootElement.style.setProperty('--' + key, value);
  }
}

export default preview;
