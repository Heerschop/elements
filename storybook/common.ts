import { html as beautify } from 'js-beautify';

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

  return beautify(raw, {
    indent_size: 2,
  });
}
