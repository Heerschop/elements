import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

export const DocsContainer = (props, context) => {
  const dark = useDarkMode();

  return BaseContainer(
    {
      ...props,
      context: {
        ...props.context,
        storyById: id => {
          const storyContext = props.context.storyById(id);

          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? themes.dark : themes.light,
              },
            },
          };
        },
      },
    },
    context,
  );
};
