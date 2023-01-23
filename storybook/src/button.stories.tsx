import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../dist/primitives';
import { ButtonElement } from '../../dist/primitives';
import { normalize } from './common';

// https://www.npmjs.com/package/@lit-labs/react

type StoryElement = Pick<ButtonElement, 'disabled'> & { children?: React.ReactNode };

declare global {
  interface HTMLElementTagNameMap {
    'app-button': StoryElement;
  }
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      'app-button': StoryElement;
    }
  }
}

export const Button = ({ ...args }: StoryElement = {}) => <app-button {...args}></app-button>;

export default {
  title: 'Primitives',
  component: Button,
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => Button(normalize(args));

export const button = Template.bind({});

button.args = {};
