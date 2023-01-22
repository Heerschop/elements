import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../dist/primitives';
import { FlexElement, ButtonElement } from '../../dist/primitives';

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

//const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button = ({}: StoryElement = {}) => {
  return (
    <div>
      <app-button></app-button>
      {/* <app-flex direction='column'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </app-flex> */}
    </div>
  );
};

type aa = (aa: StoryElement) => JSX.Element;

export default {
  title: 'Primitives',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => Button(args);

export const button = Template.bind({});

button.args = {
  disabled: false,
};
