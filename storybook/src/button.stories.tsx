import type { Meta, StoryFn } from '@storybook/react';

import '../../dist/primitives';
import { ButtonElement } from '../../dist/primitives';
import { normalize } from './common';

type StoryElement = Pick<ButtonElement, 'disabled' | 'variant' | 'size'> & {
  children?: React.ReactNode;
};

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

export const Button = (args: StoryElement) => <app-button {...normalize(args)}></app-button>;

export default {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} satisfies Meta<typeof Button>;
