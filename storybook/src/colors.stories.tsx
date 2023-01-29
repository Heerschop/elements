import classes from './decorators.module.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../dist/primitives';

// https://www.npmjs.com/package/@lit-labs/react

type StoryElement = {
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

export const Colors = ({ ...args }: StoryElement = {}) => {
  if (rootElement) {
    for (const [key, value] of Object.entries(args)) {
      rootElement.style.setProperty('--' + key, value);
    }
  }

  return (
    <app-flex gap={4} wrap="wrap" justify="center" direction="column" align="center">
      <h1>Primary</h1>
      <app-flex gap={4} wrap="wrap" justify="center">
        <ColorCard color="var(--prim-text)" background="var(--prim-main)" label="prim-main" />
        <ColorCard color="var(--prim-text)" background="var(--prim-light)" label="prim-light" />
        <ColorCard color="var(--prim-text)" background="var(--prim-dark)" label="prim-dark" />
        <ColorCard color="var(--prim-main)" background="var(--prim-text)" label="prim-text" />
      </app-flex>
      <h1>Secondary</h1>
      <app-flex gap={4} wrap="wrap" justify="center">
        <ColorCard color="var(--sec-text)" background="var(--sec-main)" label="sec-main" />
        <ColorCard color="var(--sec-text)" background="var(--sec-light)" label="sec-light" />
        <ColorCard color="var(--sec-text)" background="var(--sec-dark)" label="sec-dark" />
        <ColorCard color="var(--sec-main)" background="var(--sec-text)" label="sec-text" />
      </app-flex>
    </app-flex>
  );
};

export default {
  title: 'Primitives',
  component: Colors,
  argTypes: {
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
        //code: code.value,
        language: 'css',
        //type: 'dynamic',
        //format: true,
      },
    },
  },
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = (args, context) => {
  console.log('context.args:', context.args);

  context.parameters.docs.source.code = `
:root {
  font-size: 62.5%;

  --prim-main: ${context.args['prim-main']};
  --prim-light: ${context.args['prim-light']};
  --prim-dark: ${context.args['prim-dark']};
  --prim-text: ${context.args['prim-text']};

  --sec-main: ${context.args['sec-main']};
  --sec-light: ${context.args['sec-light']};
  --sec-dark: ${context.args['sec-dark']};
  --sec-text: ${context.args['sec-text']};

  --S0: 0rem;
  --S1: 0.2rem;
  --S2: 0.4rem;
  --S3: 0.6rem;
  --S4: 0.8rem;
  --S5: 1.2rem;
  --S6: 1.6rem;
  --S7: 2rem;
  --S8: 2.4rem;
  --S9: 2.8rem;
  --S10: 3.2rem;
  --S11: 3.6rem;
  --S12: 4rem;
  --S13: 4.2rem;

  --MAX: 999;
}
  `;

  return Colors(args);
};

export const colors = Template.bind({});

colors.args = {
  'prim-main': '#383a3f',
  'prim-light': '#62646a',
  'prim-dark': '#1f2124',
  'prim-text': '#ffffffe0',
  'sec-main': '#f68657',
  'sec-light': '#f6b352',
  'sec-dark': '#be572c',
  'sec-text': '#000000e0',
};
