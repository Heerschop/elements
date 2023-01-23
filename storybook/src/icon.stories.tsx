import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../dist/primitives';
import { IconElement } from '../../dist/primitives';
import { normalize } from './common';

// https://www.npmjs.com/package/@lit-labs/react

type StoryElement = Pick<IconElement, 'type'>;

declare global {
  interface HTMLElementTagNameMap {
    'app-icon': StoryElement;
    'app-flex': StoryElement;
  }
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      'app-icon': StoryElement;
      'app-flex': StoryElement;
    }
  }
}

export const Icon = ({ ...args }: StoryElement = {}) => <app-icon {...args}></app-icon>;
/* <div>
<Story />
</div> */

const icons: string[] = [
  'menu',
  'check',
  'dots-horizontal',
  'emoji-happy',
  'linecap',
  'hero',
  'lock-closed',
  'lock-open',
  'chevron-down',
  'chevron-up',
];

const IconCard = ({ title, children }: { title?: string; children?: React.ReactNode }) => (
  <app-flex
    direction="column"
    style={{
      width: '15rem',
      height: '12rem',
      background: 'var(--prim-dark)',
      overflow: 'hidden',
      borderRadius: 'var(--S4)',
    }}
  >
    <span
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'var(--prim-text)',
        background: 'var(--prim-light)',
        padding: 'var(--S4)',
      }}
    >
      {title}
    </span>
    <app-flex align="center" justify="center" style={{ height: '100%', padding: 'var(--S5)' }}>
      {children}
    </app-flex>
  </app-flex>
);
export default {
  title: 'Primitives',
  component: Icon,
  decorators: [
    Story => (
      <app-flex direction="column" align="center" gap={4}>
        <IconCard>
          <Story />
        </IconCard>

        {/* <IconButton
          icon="hero"
          onClick={() => {
            window.open('https://heroicons.com/');
          }}
        >
          heroicons
        </IconButton> */}
        <app-flex gap={3} wrap="wrap" justify="center">
          {icons.map(item => (
            <IconCard title={item}>
              <app-icon type={item as any} />
            </IconCard>
          ))}
        </app-flex>
      </app-flex>
    ),
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => Icon(normalize(args));

export const icon = Template.bind({});

icon.args = {};
