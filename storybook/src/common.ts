import { css_beautify, html_beautify } from 'js-beautify';

//export const stylePrefix = 'app-';
export const stylePrefix = 'app-';

type Colors = { [key: string]: string };
type Themes = { [key: string]: Colors };

export const colorThemes: Themes = {
  'theme-1': {
    'prim-main': '#383a3f',
    'prim-light': '#62646a',
    'prim-dark': '#1f2124',
    'prim-text': '#ffffffe0',

    'sec-main': '#f68657',
    'sec-light': '#f6b352',
    'sec-dark': '#be572c',
    'sec-text': '#000000e0',

    'S0': '0rem',
    'S1': '0.2rem',
    'S2': '0.4rem',
    'S3': '0.6rem',
    'S4': '0.8rem',
    'S5': '1.2rem',
    'S6': '1.6rem',
    'S7': '2rem',
    'S8': '2.4rem',
    'S9': '2.8rem',
    'S10': '3.2rem',
    'S11': '3.6rem',
    'S12': '4rem',
    'S13': '4.2rem',
  },
  'theme-2': {
    'prim-main': '#546e7a',
    'prim-light': '#819ca9',
    'prim-dark': '#29434e',
    'prim-text': '#ffffffe0',

    'sec-main': '#d32f2f',
    'sec-light': '#ff6659',
    'sec-dark': '#9a0007',
    'sec-text': '#ffffffe0',

    'S0': '0rem',
    'S1': '0.2rem',
    'S2': '0.4rem',
    'S3': '0.6rem',
    'S4': '0.8rem',
    'S5': '1.2rem',
    'S6': '1.6rem',
    'S7': '2rem',
    'S8': '2.4rem',
    'S9': '2.8rem',
    'S10': '3.2rem',
    'S11': '3.6rem',
    'S12': '4rem',
    'S13': '4.2rem',
  },
};

export function normalize(args: { [key: string]: any } = {}): { [key: string]: any } {
  const result = { ...args };

  for (const [key, value] of Object.entries(result)) {
    if (typeof value == 'boolean' && !value) {
      delete result[key];
    }
  }

  return result;
}

export function css(strings: TemplateStringsArray, ...values: unknown[]): string {
  let raw = String.raw(strings, ...values);

  return css_beautify(raw, {
    indent_size: 2,
  });
}

/**
 * Transforms a template string into a formatted, cleaned HTML string.
 * @param {TemplateStringsArray} strings - The raw template string.
 * @param {unknown[]} values - The values to be replaced in the template string.
 * @returns {string} - The resulting HTML string.
 * @description The function cleans the HTML by removing all attributes with a value of "false" and
 * remove the value of attributes which are "true"
 */
export function html(strings: TemplateStringsArray, ...values: unknown[]): string {
  let raw = String.raw(strings, ...values);

  const patterns = [
    [/\s\w+\=false/g, ''], // Removes all attributes with a value of "false"
    [/(\s)(\w+)\=true/g, '$1$2'], // Removes the value of attributes which are "true"
  ];

  for (const [pattern, value] of patterns) {
    raw = raw.replace(pattern, value as string);
  }

  return html_beautify(raw, {
    indent_size: 2,
  });
}

export function globalCSS(args: { [key: string]: string }): string {
  let style = '';

  for (const [key, value] of Object.entries(args)) {
    style += `--${key}: ${value};`;
  }

  return css`
    :root {
      font-size: 62.5%;

      ${style}

      /* --${stylePrefix}prim-main: ${args[stylePrefix + 'prim-main']};
      --${stylePrefix}prim-light: ${args[stylePrefix + 'prim-light']};
      --${stylePrefix}prim-dark: ${args[stylePrefix + 'prim-dark']};
      --${stylePrefix}prim-text: ${args[stylePrefix + 'prim-text']};

      --${stylePrefix}sec-main: ${args[stylePrefix + 'sec-main']};
      --${stylePrefix}sec-light: ${args[stylePrefix + 'sec-light']};
      --${stylePrefix}sec-dark: ${args[stylePrefix + 'sec-dark']};
      --${stylePrefix}sec-text: ${args[stylePrefix + 'sec-text']};

      --${stylePrefix}S0: 0rem;
      --${stylePrefix}S1: 0.2rem;
      --${stylePrefix}S2: 0.4rem;
      --${stylePrefix}S3: 0.6rem;
      --${stylePrefix}S4: 0.8rem;
      --${stylePrefix}S5: 1.2rem;
      --${stylePrefix}S6: 1.6rem;
      --${stylePrefix}S7: 2rem;
      --${stylePrefix}S8: 2.4rem;
      --${stylePrefix}S9: 2.8rem;
      --${stylePrefix}S10: 3.2rem;
      --${stylePrefix}S11: 3.6rem;
      --${stylePrefix}S12: 4rem;
      --${stylePrefix}S13: 4.2rem; */

      --${stylePrefix}MAX: 999;
    }
  `;
}
