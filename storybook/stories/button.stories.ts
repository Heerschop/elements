import '../../dist/index.fe72daa7';
import { Story } from '@storybook/html';
import { html } from '../common';

export default {
  title: 'Primitives/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
    //label: { control: 'text' },
    //onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    slot: { control: 'text' },
  },
};

const Template: Story<{ slot: HTMLSlotElement | string; disabled: boolean }> = ({ slot, disabled, ...args }) => {
  return html`<app-button disabled=${disabled}>${slot}</app-button>`;
};

export const Button = Template.bind({});

Button.args = {
  disabled: true,
  slot: 'Button',
};
