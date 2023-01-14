export function html(strings: TemplateStringsArray, ...values: unknown[]): string {
  let raw = String.raw(strings, ...values);

  const patterns = [
    [/\s\w+\=false/g, ''],
    [/(\s)(\w+)\=true/g, '$1$2'],
  ];

  for (const [pattern, value] of patterns) {
    raw = raw.replace(pattern, value as string);
  }

  return raw;
}
