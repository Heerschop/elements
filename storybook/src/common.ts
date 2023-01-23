export function normalize(args: { [key: string]: any } = {}): { [key: string]: any } {
  const result = { ...args };

  for (const [key, value] of Object.entries(result)) {
    if (typeof value == 'boolean' && !value) {
      delete result[key];
    }
  }

  return result;
}
