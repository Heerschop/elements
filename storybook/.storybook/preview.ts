import type { Preview } from '@storybook/react';
import '../src/global.css';
import { themes } from '@storybook/theming';
import { StoryContext } from '@storybook/types';

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
        transformSource: (source: string, storyContext: StoryContext) =>
          storyContext.viewMode === 'docs' ? storyContext.undecoratedStoryFn(storyContext) : sanitise(source),
        excludeDecorators: true,
      },
    },
  },
};

export default preview;
