import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import icons from './icons.json';

export type IconTypes = keyof typeof icons;

const elementPrefix = document?.currentScript?.attributes.getNamedItem?.('prefix')?.value ?? 'app';

@customElement(elementPrefix + '-icon')
export class IconElement extends LitElement {
  @property({ type: String })
  type?:
    | 'check'
    | 'dots-horizontal'
    | 'emoji-happy'
    | 'menu'
    | 'linecap'
    | 'hero'
    | 'lock-closed'
    | 'lock-open'
    | 'chevron-down'
    | 'chevron-up';

  static styles = css`
    :host {
      display: flex;
    }
    svg {
      color: var(--prim-text);
      width: 2.2rem;
      height: 2.2rem;
    }
  `;

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d=${icons[this.type || 'hero']} />
      </svg>
    `;
  }
}
