import classes from './decorators.module.css';
import { ComponentStory, ComponentMeta, Meta, StoryFn } from '@storybook/react';
import '../../dist/primitives';
import { colorThemes, globalCSS, stylePrefix } from './common';
import { useArgs } from '@storybook/client-api';

// https://www.npmjs.com/package/@lit-labs/react

type StoryElement = {
  theme?: string; //keyof typeof colorThemes;
  'prim-main'?: string;
  'prim-light'?: string;
  'prim-dark'?: string;
  'prim-text'?: string;
  'sec-main'?: string;
  'sec-light'?: string;
  'sec-dark'?: string;
  'sec-text'?: string;
};

const rootElement = document.querySelector<HTMLElement>(':root');

const ColorCard = ({ color, background, label }: { color: string; background: string; label: string }) => (
  <app-flex class={classes['color-decorator']} direction="column">
    <span>{label}</span>
    <app-flex
      align="center"
      justify="center"
      style={{
        color: color,
        background: background,
      }}
    >
      {rootElement?.style?.getPropertyValue('--' + label) || color}
    </app-flex>
  </app-flex>
);

let selectedTheme: string | undefined = undefined;

export const Colors = (args: StoryElement) => (
  <app-flex gap={4} wrap="wrap" justify="center" direction="column" align="center">
    <h1 {...args}>Primary</h1>
    <app-flex gap={4} wrap="wrap" justify="center">
      <ColorCard color="var(--app-prim-text)" background="var(--app-prim-main)" label="app-prim-main" />
      <ColorCard color="var(--app-prim-text)" background="var(--app-prim-light)" label="app-prim-light" />
      <ColorCard color="var(--app-prim-text)" background="var(--app-prim-dark)" label="app-prim-dark" />
      <ColorCard color="var(--app-prim-main)" background="var(--app-prim-text)" label="app-prim-text" />
    </app-flex>
    <h1>Secondary</h1>
    <app-flex gap={4} wrap="wrap" justify="center">
      <ColorCard color="var(--app-sec-text)" background="var(--app-sec-main)" label="app-sec-main" />
      <ColorCard color="var(--app-sec-text)" background="var(--app-sec-light)" label="app-sec-light" />
      <ColorCard color="var(--app-sec-text)" background="var(--app-sec-dark)" label="app-sec-dark" />
      <ColorCard color="var(--app-sec-main)" background="var(--app-sec-text)" label="app-sec-text" />
    </app-flex>
  </app-flex>
);

Colors.args = {
  theme: Object.keys(colorThemes)[0],
};

export default {
  title: 'Primitives/Colors',
  component: Colors,
  tags: ['autodocs'],
  argTypes: {
    'theme': {
      options: Object.keys(colorThemes),
      control: { type: 'select' },
    },
    'prim-main': { control: { type: 'color' } },
    'prim-light': { control: { type: 'color' } },
    'prim-dark': { control: { type: 'color' } },
    'prim-text': { control: { type: 'color' } },

    'sec-main': { control: { type: 'color' } },
    'sec-light': { control: { type: 'color' } },
    'sec-dark': { control: { type: 'color' } },
    'sec-text': { control: { type: 'color' } },
  },
  parameters: {
    docs: {
      source: {
        language: 'css',
        type: 'dynamic',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [args, updateArgs] = useArgs<typeof context.args>();

      if (args?.theme && args?.theme !== selectedTheme) {
        selectedTheme = args.theme;

        const colors = colorThemes[selectedTheme];

        if (colors) updateArgs(colors);
      }

      if (rootElement && args) {
        rootElement.style.cssText = '';
        console.log('rootElement.style.cssText:', rootElement.style.cssText);
        console.log('args:', args);

        // for (const [key, value] of Object.entries(colorThemes[selectedTheme])) {
        //   rootElement.style.setProperty('--' + stylePrefix + key, value);
        // }

        for (const [key, value] of Object.entries(args)) {
          rootElement.style.setProperty('--' + stylePrefix + key, value);
        }

        //rootElement.style.cssText = 'aaaa';
        context.parameters.docs.source.code = globalCSS(args);
        //context.parameters.docs.source.code = '';
      }

      return <Story />;
    },
  ],
} satisfies Meta<typeof Colors>;
