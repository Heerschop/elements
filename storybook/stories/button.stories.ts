import '../../dist/index.fe72daa7';
import { Story } from '@storybook/html';

export default {
  title: 'Primitives/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    slot: { control: 'text' },
  },
};

const Template: Story<{ slot: any; primary: boolean }> = ({ slot }) => {
  return `<app-button>${slot}</app-button>`;
};

export const Button = Template.bind({});

Button.args = {
  primary: true,
  slot: 'Button',
};
