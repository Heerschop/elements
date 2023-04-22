import { css_beautify, html_beautify } from 'js-beautify';

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
  return css`
    :root {
      font-size: 62.5%;

      --prim-main: ${args['prim-main']};
      --prim-light: ${args['prim-light']};
      --prim-dark: ${args['prim-dark']};
      --prim-text: ${args['prim-text']};

      --sec-main: ${args['sec-main']};
      --sec-light: ${args['sec-light']};
      --sec-dark: ${args['sec-dark']};
      --sec-text: ${args['sec-text']};

      --S0: 0rem;
      --S1: 0.2rem;
      --S2: 0.4rem;
      --S3: 0.6rem;
      --S4: 0.8rem;
      --S5: 1.2rem;
      --S6: 1.6rem;
      --S7: 2rem;
      --S8: 2.4rem;
      --S9: 2.8rem;
      --S10: 3.2rem;
      --S11: 3.6rem;
      --S12: 4rem;
      --S13: 4.2rem;

      --MAX: 999;
    }
  `;
}
