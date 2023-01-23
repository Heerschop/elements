import classes from './decorators.module.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../dist/primitives';
import { FlexElement } from '../../dist/primitives';

type StoryElement = Pick<FlexElement, 'direction' | 'gap' | 'align' | 'justify' | 'wrap'> & {
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
  class?: string | undefined;
};

declare global {
  interface HTMLElementTagNameMap {
    'app-flex': StoryElement;
  }
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      'app-flex': StoryElement;
    }
  }
}

export const Flex = ({ ...args }: StoryElement = {}) => (
  <app-flex {...args}>
    <div />
    <div />
    <div />
    <div />
  </app-flex>
);

export default {
  title: 'Primitives',
  component: Flex,
  argTypes: {
    direction: { control: { type: 'select' } },
    gap: { control: { type: 'select' } },
    align: { control: { type: 'select' } },
    justify: { control: { type: 'select' } },
    wrap: { control: { type: 'select' } },
  },
  decorators: [
    Story => (
      <div className={classes['flex-decorator']}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => Flex(args);

export const flex = Template.bind({});

flex.args = {};
