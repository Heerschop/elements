export function getPrefixes() {
  let elementPrefix = document?.currentScript?.attributes.getNamedItem?.('element-prefix')?.value;
  let stylePrefix = document?.currentScript?.attributes.getNamedItem?.('style-prefix')?.value;

  if (elementPrefix === undefined || elementPrefix?.match(/^\w+$/) === null) elementPrefix = 'app';
  if (stylePrefix === undefined || stylePrefix?.match(/^\w+$/) === null) stylePrefix = 'app';

  if (elementPrefix) elementPrefix += '-';
  if (stylePrefix) stylePrefix += '-';

  return { elementPrefix, stylePrefix };
}
