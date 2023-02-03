import { globalCSS } from './common';
import { Source } from '@storybook/addon-docs';

export const GlobalCSS = () => {
  const rootElement = document.querySelector<HTMLElement>(':root');
  const args: { [key: string]: string } = {};

  if (rootElement) {
    for (const item of Object.values(rootElement.style).filter(item => item.startsWith('--'))) {
      const value = rootElement.style.getPropertyValue(item);

      args[item.substring(2)] = value;
    }
  }

  // for (const [key, value] of Object.entries(defaultColors)) {
  //   if (!args[key]) args[key] = value;
  // }

  return (
    <>
      <h2>Global CSS element variables</h2>
      <Source language="css" dark format={false} code={globalCSS(args)} />
    </>
  );
};
