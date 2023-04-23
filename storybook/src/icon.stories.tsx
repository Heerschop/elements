import classes from './decorators.module.css';
import { Meta } from '@storybook/react';
import '../../dist/primitives';
import { IconElement } from '../../dist/primitives';

// https://www.npmjs.com/package/@lit-labs/react

type StoryElement = Pick<IconElement, 'type'>;

declare global {
  interface HTMLElementTagNameMap {
    'app-icon': StoryElement;
  }
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      'app-icon': StoryElement;
    }
  }
}

export const Icon = (args: StoryElement) => <app-icon {...args}></app-icon>;

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
  <app-flex class={classes['icon-decorator']} direction="column">
    <span>{title || 'default'}</span>
    <app-flex align="center" justify="center" style={{ height: '100%', padding: 'var(--S5)' }}>
      {children}
    </app-flex>
  </app-flex>
);

export default {
  title: 'Primitives/Icon',
  component: Icon,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => (
      <app-flex direction="column" align="center" gap={4}>
        <IconCard title={context.args.type}>
          <Story />
        </IconCard>

        <app-button
        // onClick={() => {
        //   window.open('https://heroicons.com/');
        // }}
        >
          <app-icon></app-icon>
          heroicons
        </app-button>
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
} satisfies Meta<typeof Icon>;
