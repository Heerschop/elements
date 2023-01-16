import '../../dist/index.71e09ba4';
import { Story, Meta } from '@storybook/html';
import { html } from '../common';
//import { withControls } from '@storybook/addon-controls';

export default {
  title: 'Primitives/Flex',

  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // direction: { control: { type: 'select' } },
    // gap: { control: { type: 'select' } },
    // align: { control: { type: 'select' } },
    // justify: { control: { type: 'select' } },
    // wrap: { control: { type: 'select' } },
    // disabled: { control: 'boolean' },
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
        </style>
        <div class="decorator">${story()}</div>`;
    },
  ],
} as Meta<IStory>;

interface IStory {
  direction: 'row' | 'column';
  gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  align: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify: 'start' | 'center' | 'end' | 'between' | 'evenly';
  wrap: 'wrap' | 'nowrap' | 'reverse';
}

const Template: Story<IStory> = args => {
  return html`
    <app-flex gap=${args.gap} align=${args.align}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </app-flex>
  `;
};

export const Flex = Template.bind({});

Flex.args = {
  direction: 'row',
  gap: 0,
  align: 'start',
  justify: 'start',
  wrap: 'wrap',
};
