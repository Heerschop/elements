import '../../dist/index.71e09ba4';
import { Story, Meta, addParameters } from '@storybook/html';
import { html } from '../common';

export default {
  title: 'Primitives/Flex',

  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    direction: { control: { type: 'select' } },
    gap: { control: { type: 'select' } },
    align: { control: { type: 'select' } },
    justify: { control: { type: 'select' } },
    wrap: { control: { type: 'select' } },
    disabled: { control: 'boolean' },
  },
  decorators: [
    story => {
      return html` <style>
          .decorator > app-flex {
            padding: var(--S5);
            width: 40rem;
            height: 40rem;
            border: var(--S1) solid var(--prim-light);
            overflow: hidden;
            resize: both;
          }

          .decorator app-flex div {
            width: 4rem;
            height: 4rem;
            color: var(--prim-text);
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--prim-dark);
            border: var(--S1) solid var(--prim-light);
          }

          .decorator app-flex div:nth-of-type(1)::after {
            content: '1';
          }

          .decorator app-flex div:nth-of-type(2)::after {
            content: '2';
          }

          .decorator app-flex div:nth-of-type(3)::after {
            content: '3';
          }

          .decorator app-flex div:nth-of-type(4)::after {
            content: '4';
          }
        </style>
        <div class="decorator">${story()}</div>`;
    },
  ],
} as Meta;

interface IStory {
  direction?: 'row' | 'column';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'evenly';
  wrap?: 'wrap' | 'nowrap' | 'reverse';
}

const Template: Story<IStory> = ({ ...args }) => {
  return html`<app-flex>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </app-flex>`;
};

export const Flex = Template.bind({});

Flex.args = {};
