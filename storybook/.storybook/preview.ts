import '../src/global.css';
import { themes } from '@storybook/theming';
import { StoryContext } from '@storybook/types';

function reactToHtml(source: string): string {
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
    //container: DocsContainer,
    transformSource: (source: string, storyContext: StoryContext) =>
      storyContext.viewMode === 'docs' ? storyContext.undecoratedStoryFn(storyContext) : reactToHtml(source),
    source: {
      excludeDecorators: true,
    },
  },
};
